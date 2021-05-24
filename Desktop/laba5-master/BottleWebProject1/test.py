import unittest
import compare
list_mail_cor = ["nik@mail.tu", "nikitin.alx@mail.com", "alx@mail.rt.com","alx@mail.rt.ru","gratz.ald@men.com","name@mail.su","go@mail.com"]
class Test_test(unittest.TestCase):
    def test_A(self):
         for element in list_mail_cor:
            self.assertTrue(compare.compare_email(element))

if __name__ == '__main__':
    unittest.main()