from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import time
import json
from urllib.parse import urlparse
from datetime import datetime

# Скачиваем chromedriver, соответствующий версии вашего браузера Google Chrome
#chromedriver = "/path/to/chromedriver"
service = Service(executable_path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe")
options = webdriver.ChromeOptions()
# Запускаем браузер (Google Chrome в данном случае)
browser = webdriver.Chrome(service=service, options=options)

# Открываем веб-страницу
url = 'https://colizeumarena.com/academy/'
browser.get(url)

cookiebarbtn = browser.find_element(By.CLASS_NAME, "cookie-bar__btn")
cookiebarbtn.click()
# находим кнопку по ее классу

# Нажимаем на кнопку
for i in range (6):
    button_link = browser.find_element(By.CLASS_NAME, "timetable__btn")
    button_link.click()
    time.sleep(5)


# new_url = browser.current_url
# browser.get(new_url)


# Открываем новую страницу с расписанием

# Открываем новую страницу

# Находим все турниры
all_tournaments = browser.find_elements(By.CLASS_NAME, "timetable-block__name")
all_text = browser.find_elements(By.CLASS_NAME, "timetable-block__text")


# Сохраняем результаты
date_dict = []
parsed_url = urlparse(url)
site_name = parsed_url.netloc
site_name = site_name.replace(".com", "")

for i in range(len(all_tournaments)):
    paragraphs = all_text[i].find_elements(By.TAG_NAME, "p")
    paragraph_texts = [p.text for p in paragraphs]
    date = {
        "id": i+1,
        "Date": all_tournaments[i].text,
        "GameAndFormat": paragraph_texts[0],
        "PrizeFund": paragraph_texts[1],
        "StartTime": paragraph_texts[2],
        "Link": url,
        "Name": site_name
        }
    date_dict.append(date)
 
# with open("C:/Users/User/Desktop/Kursovaya_last/Kutabara/tournaments_site/project/front-end/src/result.json", "w", encoding="utf-8") as file:
#     json.dump(date_dict, file, ensure_ascii=False, indent=4)

# with open("result.json", "r", encoding="utf-8") as file:
#     result = json.load(file)


# for i in result:
#         # print(f"{i}: {result[0][i]}")
#     for j in result[i]:
#         result[i][j] = 
        
            
# for paragraphs in result.items():
#     rep = ["×" "Х"]
#     for item in rep:
#         if item in paragraphs:
#             paragraphs = paragraphs.replace(item, "x")

    
# Закрываем браузер
browser.quit()


service = Service(executable_path = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chromedriver.exe")
options = webdriver.ChromeOptions()
# Запускаем браузер (Google Chrome в данном случае)
browser = webdriver.Chrome(service=service, options=options)

# Открываем веб-страницу
url = 'https://cyberxcommunity.ru/tournaments.html'
browser.get(url)

# cookiebarbtn = browser.find_element(By.CLASS_NAME, "cookie-bar__btn")
# cookiebarbtn.click()
# # находим кнопку по ее классу

# # Нажимаем на кнопку
# for i in range (6):
#     button_link = browser.find_element(By.CLASS_NAME, "timetable__btn")
#     button_link.click()
#     time.sleep(5)


# new_url = browser.current_url
# browser.get(new_url)


# Открываем новую страницу с расписанием

# Открываем новую страницу

# Находим все турниры

# date_dict = []
# Время
clock = browser.find_elements(By.CLASS_NAME, "date")
year = "2024"
months = {
    "января": "01",
    "февраля": "02",
    "марта": "03",
    "апреля": "04",
    "мая": "05",
    "июня": "06",
    "июля": "07",
    "августа": "08",
    "сентября": "09",
    "октября": "10",
    "ноября": "11",
    "декабря": "12"
}
all_dates = []
for i in range(len(clock)):
    day, month_text = clock[i].text.split()
    month_text = month_text.lower()
    month = months[month_text]
    date_with_year = f"{day}.{month}.{year}"
    date_obj = datetime.strptime(date_with_year, "%d.%m.%Y")
    formatted_date = date_obj.strftime("%d.%m.%Y")
    all_dates.append(formatted_date)



name = browser.find_elements(By.CLASS_NAME, "name")
price = browser.find_elements(By.CLASS_NAME, "num")
info = browser.find_elements(By.CLASS_NAME, "info")

for info_element in info:
    link_element = info_element.find_element(By.TAG_NAME, "a")
    link = link_element.get_attribute("href")

# Сохраняем результаты

parsed_url = urlparse(url)
site_name = parsed_url.netloc
site_name = site_name.replace(".com", "")

count = 29
for i in range(len(name)):
    date = {
        "id": count,
        "Date": all_dates[i],
        "GameAndFormat": name[i].get_attribute('innerHTML'),
        "PrizeFund": price[i].get_attribute('innerHTML'),
        "StartTime": link,
        "Link": url,
        "Name": site_name
        }
    date_dict.append(date)
    count+=1
 
with open("C:/Users/User/Desktop/Kursovaya_last/Kutabara/tournaments_site/project/front-end/src/result.json", "w", encoding="utf-8") as file:
    json.dump(date_dict, file, ensure_ascii=False, indent=4)