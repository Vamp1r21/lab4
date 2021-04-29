import unittest
import compare
list_mail_uncor = ["", "1", "m1@", "@mail", "asd"]
class Test_test_1(unittest.TestCase):
        def test_B(self):
            for element in list_mail_uncor:
                self.assertFalse(compare.compare(element))

if __name__ == '__main__':
    unittest.main()
