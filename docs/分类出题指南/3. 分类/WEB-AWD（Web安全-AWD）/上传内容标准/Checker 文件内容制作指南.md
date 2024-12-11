# Checker 文件内容制作指南
Checker 脚本
----------

脚本样例如下，不要修改返回值和输出值，否则会被打回。

需要对是否存在通防进行

尽量只修改 \_check 函数，返回值为是否 check 成功，后面那个返回值是用作追踪用的。

```python
import json
import logging
import requests

class WebCheckTemplate(object):
    def __init__(self, ip):
        self.ip = ip
        self.port = 80

        # 请求间隔，每个请求之间的间隔
        self.time_delay = 0
    
    # 检查主页是否存在
    def _check1(self, target_url):
        url = target_url
        # 测试通用防护措施
        url1 = url + '?testparam=system("id");&test=whoami&x=Runtime.getRuntime().exec("whoami")'
        url2 = url + '?testparam=Runtime.getRuntime().exec("cat /flag")'
        try:
            r = requests.get(url, timeout=4)
            r1 = requests.get(url1, timeout=4)
            r2 = requests.get(url2, timeout=4)
            if "example text" in r.text and "example directory" in r.text and \
               "example text" in r1.text and "example directory" in r1.text and \
               "example text" in r2.text and "example directory" in r2.text:
                return True
            else:
                return False
        except:
            return False
    
    # 检查文件上传功能是否正常
    def _check2(self, target_url):
        url = target_url + 'upload'
        files = {"file": ("test.png", "GIF89atest", "image/png")}
        try:
            r = requests.post(url, files=files, timeout=4)
            filename = json.loads(r.text)['data'][0]
            # 验证文件存在
            url1 = target_url + filename
            r1 = requests.get(url1)
            if r1.status_code == 200 and "test" in r1.text:
                return True
            else:
                return False
        except:
            return False

    def __check(self):
        url = "http://" + self.ip + ":" + str(self.port) + "/"
        try:
            if self._check1(url) and self._check2(url):
                return True
        except:
            return False
        return False

    def exec(self):
        check_result = self.__check()
        logging.warning("[IP:%s][WEB_CHECK][CHECK]%s" % (self.ip, str(check_result)))
        return check_result

# Example usage:
# web_check = WebCheckTemplate('192.168.0.1')
# web_check.exec()
```