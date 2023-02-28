# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestTestmlops():
  def setUp(self):
    self.driver = webdriver.Firefox() # initialize driver object
    self.driver.implicitly_wait(10) # set a default wait time for elements to load

  def setup_method(self, method):
    self.driver = webdriver.Firefox()
    self.vars = {}
  
  
  def test_testmlops(self):
      self.driver.get("http://localhost:5000/")
      self.driver.set_window_size(1552, 832)
      time.sleep(3)
      self.driver.find_element(By.ID, "title").click()
      self.driver.find_element(By.ID, "title").send_keys("naruto")
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question__buttons--left > .home__form__question__buttons--next").click()
      self.driver.find_element(By.ID, "Music-genre").click()
      self.driver.find_element(By.ID, "Psychological-genre").click()
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next").click()
      self.driver.find_element(By.ID, "description").click()
      self.driver.find_element(By.ID, "description").send_keys("the movie is good")
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next").click()
      element = self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next")
      actions = ActionChains(self.driver)
      actions.move_to_element(element).perform()
      element = self.driver.find_element(By.CSS_SELECTOR, "body")
      actions = ActionChains(self.driver)
      #actions.move_to_element(element, 0, 0).perform()
      self.driver.find_element(By.ID, "TV-type").click()
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next").click()
      element = self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next")
      actions = ActionChains(self.driver)
      actions.move_to_element(element).perform()
      element = self.driver.find_element(By.CSS_SELECTOR, "body")
      actions = ActionChains(self.driver)
      #actions.move_to_element(element, 0, 0).perform()
      self.driver.find_element(By.ID, "AC Create-producer").click()
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next").click()
      element = self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next")
      actions = ActionChains(self.driver)
      actions.move_to_element(element).perform()
      element = self.driver.find_element(By.CSS_SELECTOR, "body")
      actions = ActionChains(self.driver)
      #actions.move_to_element(element, 0, 0).perform()
      self.driver.find_element(By.ID, "Vega Entertainment-studio").click()
      self.driver.find_element(By.CSS_SELECTOR, ".home__form__question--show .home__form__question__buttons--next").click()
      time.sleep(5)
      predicted_rating_element = self.driver.find_element(By.ID, "result")
      result_element = self.driver.find_element(By.CLASS_NAME,"home__result--p")
      result_text = result_element.text
      assert "We think you will like your anime at a score of" in result_text


  def teardown_method(self, method):
      self.driver.quit()
    
