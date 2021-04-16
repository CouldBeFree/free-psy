import React, { FunctionComponent } from 'react';
import Presentation from "../../common/Presentation/Presentation";
import primaryImage from "../../../assets/images/for-psychologists-1.png";
import Description from "../../common/Description/Description";
import secondaryImage from "../../../assets/images/for-psychologists-2.png"

const ForPsychologists: FunctionComponent = () => {
  return (
    <>
      <Presentation 
        slogan="Шукаєш де використати свої навички?"
        description="Якщо у ваc є бажання допогати іншими та водночас вдосконалювати свої знання і вміння на практиці - реєструйтеся та  долучайтеся до нашої команди."
        buttonText="Зареєструватись"
        image={primaryImage}
      />
      <Description
        image={secondaryImage}
        howItWorkFirtsDescription="Після реєстрації вам потрібно пройти верифікацію, а саме: надіслати фото свого диплому про психологічну освіту  та селфі з ідентифікаційним посвідченням. Після перевірки ви будете додані до списку психологів PsyFree."
        howItWorkSecondDescription="Особи, які потребуватимуть вашої допомоги, матимуть можливість надсилати вам приватні повідомлення у чаті, коротко описавши свій запит. Після чого ви зможете домовитися про онлайн зустріч в одній із соціальних мереж з використанням відео зв’язку."
        forWhatFirtsDescription="Реєструйтеся, якщо ви хочете, щоб люди, які потребують допомоги та підтримки, були почутими та не залишалися на одиниці із своїми проблемами. Пам’ятайте, що покращення стану психічного здоров’я кожної людини покращує стан суспільства в цілому."
        forWhatSecondDescription="Якщо у вас на даний момент немає достатньо практичного досвіду чи ви опановуєте новий для себе психотерапевтичний напрям, в такому разі вам саме сюди. Тут ви зможеш знайти достатню кількість клієнтів, що дозволить вам вдосконалити свої знання, вміння та практичні навички."
      />
    </>
  )
}

export default ForPsychologists;
