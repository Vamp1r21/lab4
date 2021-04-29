import unittest
import compare
list_mail_cor = ["nik@mail.tu", "nikitin.alx@mail.com", "alx@mail.rt.com"]
class Test_test(unittest.TestCase):
    def test_A(self):
         for element in list_mail_cor:
            self.assertTrue(compare.compare(element))

if __name__ == '__main__':
    unittest.main()