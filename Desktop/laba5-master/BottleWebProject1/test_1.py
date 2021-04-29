import unittest
import compare

class Test_test_1(unittest.TestCase):
    def test_A(self):
        list_mail_cor = ["andre@mai", "andreasd.asd@mail.com", "asd@mail.rt.com"]
        for element in list_mail_cor:
            self.assertTrue(compare.compare(element))
    def test_B(self):
        list_mail_uncor = ["", "1", "m1@", "@mail", "asd"]
        for element in list_mail_uncor:
            self.assertFalse(compare.compare(element))

if __name__ == '__main__':
    unittest.main()
