import React, { FunctionComponent } from 'react';
import Presentation from "../../common/Presentation/Presentation";
import primaryImage from "../../../assets/images/for-clients-1.png";
import Description from "../../common/Description/Description";
import secondaryImage from "../../../assets/images/for-clients-2.png"

const ForClients: FunctionComponent = () => {
  return (
    <>
      <Presentation 
        slogan="Потрібна допомога? Не гай часу!"
        description="Зіткнулися з життєвими труднащами?! Пам’ятайте, що ви не один. Тут на вас чекає команда психологів-волонетрів, які готові вам допомогти. "
        buttonText="Зареєструватись"
        image={primaryImage}
      />
      <Description
        image={secondaryImage}
        howItWorkFirtsDescription="Вам потрібно зареєструватись в нашій системі. Придумайте псевдонім та пароль. Далі оберіть психолога, який найкраще відповідатиме вашим критеріям та напишіть йому в приватні повідомлення. "
        howItWorkSecondDescription="Питання довіри, розуміння та вчасно наданої професійної допомоги є особливо важливим, тому вся інформація, якою ви поділитись, є конфіденційною."
        forWhatFirtsDescription="У кожного у житті трапляються ситуації, які в тій чи іншій мірі впливають на нас, на наш психічний та емоційний стан та на якість нашого життя. Саме у таких ситуаціях ми шукаємо підтримки та розуміння."
        forWhatSecondDescription="Психолог - спеціаліст, який супроводжуватиме вас у проживанні ваших почуттів, це людина, яка допоможе знайти внутрішній спокій, рівновагу, ресурс та разом з тим, буде поруч, коли ви прийматимете важливі життєві рішення."
      />
    </>
  )
}

export default ForClients;
