import unittest
import compare

class Test_test_1(unittest.TestCase):
    def test_B(self):
        list_mail_uncor = ["", "1", "m1@", "@mail", "asd","nvidb@mvodm.vmdov","nvidb@mvodm.v","ccwc@miiinm"]
        for element in list_mail_uncor:
            self.assertFalse(compare.compare_email(element))

if __name__ == '__main__':
    unittest.main()
