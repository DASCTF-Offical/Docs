# Checker 文件内容制作指南
Checker 脚本
----------

脚本样例如下，不要修改返回值和输出值，否则会被打回。

需要对是否存在通防进行

尽量只修改 \_check 函数，返回值为是否 check 成功，后面那个返回值是用作追踪用的。

```python
import json
import logging
import time
from pwn import *

class Pwn1(object):
    def __init__(self, ip, port=80, time_delay=0):
        self.ip = ip
        self.port = port
        self.time_delay = time_delay

    def _check1(self, target_url):
        try:
            conn = remote(self.ip, self.port)
            conn.sendline(b'GET / HTTP/1.1\r\nHost: %s\r\n\r\n' % self.ip.encode())
            response = conn.recv()
            conn.close()
            if b"example text" in response and b"example directory" in response:
                return True
        except Exception as e:
            logging.error(f"Exception in _check1: {e}")
        return False

    def _check2(self, target_url):
        try:
            conn = remote(self.ip, self.port)
            conn.sendline(b'POST /upload HTTP/1.1\r\nHost: %s\r\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="file"; filename="test.png"\r\nContent-Type: image/png\r\n\r\nGIF89atest\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--' % self.ip.encode())
            response = conn.recv()
            conn.close()
            filename = json.loads(response.decode())['data'][0]
            conn = remote(self.ip, self.port)
            conn.sendline(b'GET /%s HTTP/1.1\r\nHost: %s\r\n\r\n' % (filename.encode(), self.ip.encode()))
            response = conn.recv()
            conn.close()
            if b"test" in response:
                return True
        except Exception as e:
            logging.error(f"Exception in _check2: {e}")
        return False

    def __check(self):
        url = f"http://{self.ip}:{self.port}/"
        try:
            checks = [self._check1, self._check2]
            for check in checks:
                if not check(url):
                    return False
                time.sleep(self.time_delay)
            return True
        except Exception as e:
            logging.error(f"Exception in __check: {e}")
        return False

    def exec(self):
        check_result = self.__check()
        logging.warning(f"[IP:{self.ip}][PWN1][CHECK]{check_result}")
        return check_result

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python script.py <ip> <port>")
        sys.exit(1)

    ip = sys.argv[1]
    port = int(sys.argv[2])

    pwn1 = Pwn1(ip=ip, port=port)
    check_result = pwn1.exec()
    print(f"Check result: {check_result}")
```