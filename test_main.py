import unittest
from app import app

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
    
    def test_home(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    
    def test_predict(self):
        with app.test_client() as client:
            response = client.post('/predict', json={
                'title': 'Naruto',
                'genre': 'Action, Adventure',
                'synopsis': 'An exciting anime about a hero fighting monsters',
                'anime_type': 'TV',
                'studio': 'Studio Ghibli',
                'producer': 'Hayao Miyazaki'
            })
            self.assertEqual(response.status_code, 200)
            self.assertIsInstance(response.json, list)
            self.assertEqual(len(response.json), 1)
            self.assertIsInstance(response.json[0], float)



if __name__ == '__main__':
    unittest.main()

