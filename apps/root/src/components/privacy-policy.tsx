import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';

const Container = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 23vh 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 18vh 30px 0 30px;
  }
`;

const H1 = SC.h1`
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 2rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 1.375rem;
    margin: 0 0 0.5rem 0;
  }
`;

const H2 = SC.h2`
  font-weight: 600;
  margin: 1rem 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 1.5rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.875rem;
    margin: 0.75rem 0 0.5rem 0;
  }
`;

const H3 = SC.h3`
  font-weight: 500;
  margin: 1rem 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 1.25rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.825rem;
    margin: 0.75rem 0 0.5rem 0;
  }
`;

const Block = SC.p`
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  padding-bottom: .3rem;
  font-size: 0.875rem;
  line-height: 1.25;
  @media ${maxDevice.tablet} {
    font-size: 0.825rem;
    margin: 0 0 0.5rem 0;
  }
`;

export const PrivacyPolicy = (props: any) => {
  const {t} = useTranslation('common');
  return (
    <section>
    <Container>
      <H1>{t('PrivacyPolicyPage.title')}</H1>
      <H2>ОБЩИЕ ПОЛОЖЕНИЯ</H2>
      <H3>1. Назначение и основание действия Политики конфиденциальности</H3>
      <Block>1.1. Настоящая Политика самозанятого Шмакова Евгения Сергеевича (ИНН: 540863710354) (Политика конфиденциальности) в отношении обработки персональных данных (далее ― Политика) разработана во исполнение требований п. 2 ч. 1 ст. 18.1 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» в целях обеспечения защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</Block>
      <Block>1.2. Политика действует в отношении всех персональных данных, которые обрабатывает самозанятый Шмаков Евгений Сергеевич (далее ― Оператор, самозанятый).</Block>
      <Block>1.3. Политика определяет основные права и обязанности Оператора и субъектов персональных данных, цели обработки персональных данных, правовые основания обработки персональных данных, категории обрабатываемых персональных данных, категории субъектов персональных данных, порядок и условия обработки персональных данных, а также меры по обеспечению безопасности персональных данных при их обработке, применяемые самозанятым.</Block>
      <Block>1.4. Политика определяет основные права и обязанности Оператора и субъектов персональных данных, цели обработки персональных данных, правовые основания обработки персональных данных, категории обрабатываемых персональных данных, категории субъектов персональных данных, порядок и условия обработки персональных данных, а также меры по обеспечению безопасности персональных данных при их обработке, применяемые Самозанятым.</Block>
      <Block>1.5. Политика, а также изменения к ней утверждаются самозанятым.</Block>
      <Block>1.6. Во исполнение требований ч. 2 ст. 18.1 Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ Политика публикуется в свободном доступе в информационно-телекоммуникационной сети Интернет на сайте Оператора.</Block>
      <Block>1.7. Контроль за исполнением требований Политики осуществляется уполномоченными лицами, ответственными за организацию обработки персональных данных у Оператора.</Block>
      <Block>1.8. Ответственность за нарушение требований законодательства Российской Федерации и нормативных актов Оператора в сфере обработки и защиты персональных данных определяется в соответствии с законодательством Российской Федерации.</Block>
      <Block>1.9. Основные термины и определения Персональные данные ― любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных). Оператор персональных данных (Оператор) ― самозанятый Шмаков Евгений Сергеевич (ИНН: 540863710354), который организует и (или) осуществляет обработку персональных данных в Обществе (далее – Общество), а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными. Пользователь сервиса Оператора (далее – Пользователь) – физическое лицо, имеющее доступ к сервису, посредством сети «Интернет» и использующее сервис Оператора на основании Публичной оферты Сервиса Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных. Распространение персональных данных ― действия, направленные на раскрытие персональных данных неопределенному кругу лиц. Предоставление персональных данных ― действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц. Блокирование персональных данных ― временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных). Уничтожение персональных данных ― действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и (или) в результате которых уничтожаются материальные носители персональных данных. Обезличивание персональных данных ― действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных. Информационная система персональных данных ― совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.</Block>
      <Block>1.10. Основные права и обязанности Оператора</Block>
      <Block>1.10.1. Оператор имеет право:</Block>
      <Block>1.10.1.1. самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами;</Block>
      <Block>1.10.1.2. поручить обработку персональных данных другому лицу с согласия субъекта персональных данных, если иное не предусмотрено федеральным законом, на основании заключаемого с этим лицом договора. Лицо, осуществляющее обработку персональных данных по поручению Оператора, обязано соблюдать принципы и правила обработки персональных данных, предусмотренные Законом о персональных данных;</Block>
      <Block>1.10.1.3. в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных.</Block>
      <Block>1.10.2. Оператор обязан:</Block>
      <Block>1.10.2.1. организовывать обработку персональных данных в соответствии с требованиями Закона о персональных данных;</Block>
      <Block>1.10.2.2. отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;</Block>
      <Block>1.10.2.3. сообщать в уполномоченный орган по защите прав субъектов персональных данных Федеральную службу по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) по запросу этого органа необходимую информацию в течение 30 (тридцати) календарных дней с даты получения такого запроса.</Block>
      <Block>1.11. Основные права субъекта персональных данных</Block>
      <Block>1.11.1. Субъект персональных данных имеет право:</Block>
      <Block>1.11.1.1. получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;</Block>
      <Block>1.11.1.2. требовать от Оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;</Block>
      <Block>1.11.1.3. выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг.</Block>
      <H3>2. Цели сбора персональных данных</H3>
      <Block>2.1. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.</Block>
      <Block>2.2. Обработке подлежат только персональные данные, которые отвечают целям их обработки.</Block>
      <Block>2.3. Обработка Оператором персональных данных осуществляется в следующих целях:</Block>
      <Block>2.3.1. обеспечение соблюдения Конституции Российской Федерации, федеральных законов и иных нормативных правовых актов Российской Федерации;</Block>
      <Block>2.3.2. Заключение договора (оферты) и сопровождение заключенного договора (оферты);</Block>
      <Block>2.3.3. оказание Оператором услуг, указанных в оферте;</Block>
      <Block>2.3.4. осуществление сбора статистической информации;</Block>
      <Block>2.3.5. осуществление верификации пользователей;</Block>
      <Block>2.3.6. осуществление технической поддержки и администрирования;</Block>
      <Block>2.3.7. организация аналитики действий функционала Сервиса Оператора;</Block>
      <Block>2.3.8. осуществление деятельности в соответствии с уставом Организации;</Block>
      <Block>2.3.9. осуществление прав и исполнение обязанностей сторон трудовых отношений;</Block>
      <Block>2.3.10. осуществление гражданско-правовых отношений;</Block>
      <Block>2.3.11. организация постановки на индивидуальный (персонифицированный) учет работников в системе обязательного пенсионного страхования;</Block>
      <Block>2.3.12. привлечение и отбор кандидатов на работу у Оператора;</Block>
      <Block>2.3.13. заполнение и передача в органы исполнительной власти и иные уполномоченные организации требуемых форм отчетности;</Block>
      <Block>2.3.14. ведение бухгалтерского учета;</Block>
      <Block>2.3.15. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Пользователем функционала Сервиса;</Block>
      <Block>2.3.16. Предоставление Пользователю с его согласия, обновлений услуг, специальных предложений, информации о ценах, новостной рассылки и иных сведений от имени Оператора;</Block>
      <Block>2.3.17. Осуществления рекламной деятельности с согласия Пользователя;</Block>
      <Block>2.4. Обработка персональных данных работников может осуществляться исключительно в целях обеспечения соблюдения законов и иных нормативных правовых актов.</Block>
      <H3>3. Правовые основания обработки персональных данных</H3>
      <Block>3.1. Правовым основанием обработки персональных данных является совокупность нормативных правовых актов, во исполнение которых и в соответствии с которыми Оператор осуществляет обработку персональных данных в соответствии с требованиями Конституции Российской Федерации, Гражданским кодексом Российской Федерации, Трудовым кодексом Российской Федерации, Налоговым кодексом Российской Федерации, ФЗ от 08.02.1998 № 14-ФЗ «Об обществах с ограниченной ответственностью», ФЗ от 06.12.2011 № 402-ФЗ «О бухгалтерском учете», ФЗ от 15.12.2001 № 167-ФЗ «Об обязательном пенсионном страховании в Российской Федерации», Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ, а также иных нормативно-правовых актов Российской Федерации, регулирующих отношения, связанные с деятельностью Оператора.</Block>
      <Block>3.2. Правовым основанием обработки персональных данных также являются устав Оператора в действующей редакции, договоры, заключаемые между Оператором и субъектами персональных данных, согласие субъектов персональных данных на обработку их персональных данных.</Block>
      <H3>4. Объем и категории обрабатываемых персональных данных, категории субъектов персональных данных</H3>
      <Block>4.1. Содержание и объем обрабатываемых персональных данных должны соответствовать заявленным целям обработки, предусмотренным в разделе 2 Политики. Обрабатываемые персональные данные не должны быть избыточными по отношению к заявленным целям их обработки.</Block>
      <Block>4.2. Оператор может обрабатывать персональные данные следующих категорий субъектов персональных данных.</Block>
      <Block>4.2.1. Кандидаты для приема на работу к Оператору:</Block>
      <Block>4.2.1.1. фамилия, имя, отчество;</Block>
      <Block>4.2.1.2. пол;</Block>
      <Block>4.2.1.3. гражданство;</Block>
      <Block>4.2.1.4. дата и место рождения;</Block>
      <Block>4.2.1.5. номер контактного телефона;</Block>
      <Block>4.2.1.6. адрес электронной почты;</Block>
      <Block>4.2.1.7. фотографическое изображение;</Block>
      <Block>4.2.1.8. сведения об образовании, опыте работы, квалификации;</Block>
      <Block>4.2.1.9. иные персональные данные, сообщаемые кандидатами в резюме и сопроводительных письмах.</Block>
      <Block>4.2.2. Работники и бывшие работники Оператора:</Block>
      <Block>4.2.2.1. фамилия, имя, отчество;</Block>
      <Block>4.2.2.2. пол;</Block>
      <Block>4.2.2.3. гражданство;</Block>
      <Block>4.2.2.4. дата и место рождения;</Block>
      <Block>4.2.2.5. паспортные данные (номер, серия паспорта, кем и когда выдан, код подразделения, выдавшего паспорт);</Block>
      <Block>4.2.2.6. данные документа, заменяющего паспорт (наименование документа, номер, серия документа, кем и когда выдан, код подразделения, выдавшего документ);</Block>
      <Block>4.2.2.7. адрес места жительства (регистрации);</Block>
      <Block>4.2.2.8. адрес места фактического проживания;</Block>
      <Block>4.2.2.9. номер контактного телефона;</Block>
      <Block>4.2.2.10. адрес электронной почты;</Block>
      <Block>4.2.2.11. фотографическое изображение;</Block>
      <Block>4.2.2.12. сведения об образовании, включая следующие сведения: уровень образования, наименование учебного заведения, год окончания, номер диплома, специальность / направление подготовки, квалификация;</Block>
      <Block>4.2.2.13. индивидуальный номер налогоплательщика (ИНН);</Block>
      <Block>4.2.2.14. страховой номер индивидуального лицевого счета (СНИЛС);</Block>
      <Block>4.2.2.15. сведения о семейном положении и составе семьи;</Block>
      <Block>4.2.2.16. сведения о трудовой деятельности, в том числе о месте работы, страховом (трудовом) стаже, о занимаемой должности, переводах на другую должность;</Block>
      <Block>4.2.2.17. сведения о воинском учете;</Block>
      <Block>4.2.2.18. реквизиты банковского счета;</Block>
      <Block>4.2.2.19. сведения о заработной плате и других выплатах;</Block>
      <Block>4.2.2.20. сведения о наградах и поощрениях;</Block>
      <Block>4.2.2.21. иные персональные данные, предоставляемые работниками в соответствии с требованиями законодательства Российской Федерации.</Block>
      <Block>4.2.3. Члены семьи работников Оператора:</Block>
      <Block>4.2.3.1. фамилия, имя, отчество;</Block>
      <Block>4.2.3.2. степень родства;</Block>
      <Block>4.2.3.3. дата рождения;</Block>
      <Block>4.2.3.4. адрес проживания (регистрации);</Block>
      <Block>4.2.3.5. иные персональные данные, предоставляемые работниками в соответствии с требованиями законодательства Российской Федерации.</Block>
      <Block>4.2.4. Клиенты и контрагенты Оператора (физические лица и/или индивидуальные предприниматели):</Block>
      <Block>4.2.4.1. фамилия, имя, отчество;</Block>
      <Block>4.2.4.2. дата и место рождения;</Block>
      <Block>4.2.4.3. паспортные данные (номер, серия паспорта, кем и когда выдан, код подразделения, выдавшего паспорт);</Block>
      <Block>4.2.4.4. адрес места жительства (регистрации);</Block>
      <Block>4.2.4.5. адрес места фактического проживания;</Block>
      <Block>4.2.4.6. номер контактного телефона;</Block>
      <Block>4.2.4.7. адрес электронной почты;</Block>
      <Block>4.2.4.8. индивидуальный номер налогоплательщика (ИНН);</Block>
      <Block>4.2.4.9. страховой номер индивидуального лицевого счета (СНИЛС);</Block>
      <Block>4.2.4.10. реквизиты банковского счета;</Block>
      <Block>4.2.4.11. иные персональные данные, предоставляемые клиентами и контрагентами (физическими лицами и/или индивидуальными предпринимателями), необходимые для заключения и исполнения договоров.</Block>
      <Block>4.2.5. Представители/работники клиентов и контрагентов Оператора (физические лица):</Block>
      <Block>4.2.5.1. фамилия, имя, отчество;</Block>
      <Block>4.2.5.2. паспортные данные (номер, серия паспорта, кем и когда выдан, код подразделения, выдавшего паспорт);</Block>
      <Block>4.2.5.3. данные документа, заменяющего паспорт (наименование документа, номер, серия документа, кем и когда выдан, код подразделения, выдавшего документ);</Block>
      <Block>4.2.5.4. адрес места жительства (регистрации);</Block>
      <Block>4.2.5.5. адрес места фактического проживания;</Block>
      <Block>4.2.5.6. номер контактного телефона;</Block>
      <Block>4.2.5.7. адрес электронной почты;</Block>
      <Block>4.2.5.8. должность;</Block>
      <Block>4.2.5.9. иные персональные данные, предоставляемые представителями/ работниками клиентов и контрагентов, необходимые для заключения и исполнения договоров.</Block>
      <Block>4.2.6. Физические лица, приобретшие или намеревающиеся приобрести услуги Оператора, услуги третьих лиц при посредничестве Оператора или не имеющие с Оператором договорных отношений, при условии, что их персональные данные включены в автоматизированные системы Организации и обрабатываются в соответствии с законодательством о персональных данных:</Block>
      <Block>4.2.6.1. фамилия, имя, отчество;</Block>
      <Block>4.2.6.2. адрес электронной почты;</Block>
      <Block>4.2.6.3. номер контактного телефона;</Block>
      <Block>4.2.6.4. дата и место рождения;</Block>
      <Block>4.2.6.5. реквизиты банковской карты;</Block>
      <Block>4.2.6.6. уровень физической активности;</Block>
      <Block>4.2.6.7. пол;</Block>
      <Block>4.2.6.8. данные для интеграции с социальными сетями Google <a target="_blank" href="https://plus.google.com" title="">https://plus.google.com</a> (логин/имя пользователя, адрес электронной почты);</Block>
      <Block>4.2.6.9. данные для интеграции с порталом Госуслуг <a target="_blank" href="https://esia.gosuslugi.ru" title="">https://esia.gosuslugi.ru</a> (логин для входа);</Block>
      <Block>4.2.6.10. информация о действиях, совершаемых на платформах Оператора, а также сведения об используемых устройствах (такие как геолокация, IP-адреса, вид операционной системы, тип браузера, Cookies).</Block>
      <Block>4.3. Оператором не осуществляется обработка биометрических и специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, за исключением случаев, предусмотренных законодательством Российской Федерации.</Block>
      <H3>5. Порядок и условия обработки персональных данных</H3>
      <Block>5.1. Обработка персональных данных осуществляется Оператором в соответствии с требованиями законодательства Российской Федерации.</Block>
      <Block>5.2. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.</Block>
      <Block>5.3. Обработка персональных данных Оператором осуществляется следующими способами:</Block>
      <Block>5.3.1. неавтоматизированная обработка персональных данных;</Block>
      <Block>5.3.2. автоматизированная обработка персональных данных с передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.</Block>
      <Block>5.4. Обработка персональных данных осуществляется с согласия субъектов персональных данных на обработку их персональных данных, а также без такового в случаях, предусмотренных законодательством Российской Федерации, а именно:</Block>
      <Block>5.4.1. обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных;</Block>
      <Block>5.4.2. обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;</Block>
      <Block>5.4.3. обработка персональных данных осуществляется в связи с участием лица в конституционном, гражданском, административном, уголовном судопроизводстве, судопроизводстве в арбитражных судах;</Block>
      <Block>5.4.4. обработка персональных данных необходима для исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве;</Block>
      <Block>5.4.5. обработка персональных данных необходима для исполнения полномочий федеральных органов исполнительной власти, органов государственных внебюджетных фондов, исполнительных органов государственной власти субъектов Российской Федерации, органов местного самоуправления и функций организаций, участвующих в предоставлении соответственно государственных и муниципальных услуг, предусмотренных Федеральным законом от 27 июля 2010 года № 210-ФЗ «Об организации предоставления государственных и муниципальных услуг», включая регистрацию субъекта персональных данных на едином портале государственных и муниципальных услуг и (или) региональных порталах государственных и муниципальных услуг;</Block>
      <Block>5.4.6. обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем, по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;</Block>
      <Block>5.4.7. обработка персональных данных необходима для защиты жизни, здоровья или иных жизненно важных интересов субъекта персональных данных, если получение согласия субъекта персональных данных невозможно;</Block>
      <Block>5.4.8. обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц, в том числе в случаях, предусмотренных Федеральным законом «О защите прав и законных интересов физических лиц при осуществлении деятельности по возврату просроченной задолженности и о внесении изменений в Федеральный закон «О микрофинансовой деятельности и микрофинансовых организациях», либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;</Block>
      <Block>5.4.9. обработка персональных данных необходима для осуществления профессиональной деятельности журналиста и (или) законной деятельности средства массовой информации либо научной, литературной или иной творческой деятельности при условии, что при этом не нарушаются права и законные интересы субъекта персональных данных;</Block>
      <Block>5.4.10. обработка персональных данных осуществляется в статистических или иных исследовательских целях, за исключением целей, указанных в ст. 15 Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ, при условии обязательного обезличивания персональных данных;</Block>
      <Block>5.4.11. обработка персональных данных, полученных в результате обезличивания персональных данных, осуществляется в целях повышения эффективности государственного или муниципального управления, а также в иных целях, предусмотренных Федеральным законом от 24 апреля 2020 года № 123-ФЗ «О проведении эксперимента по установлению специального регулирования в целях создания необходимых условий для разработки и внедрения технологий искусственного интеллекта в субъекте Российской Федерации ― городе федерального значения Москве и внесении изменений в статьи 6 и 10 Федерального закона «О персональных данных» и Федеральным законом от 31 июля 2020 года № 258-ФЗ «Об экспериментальных правовых режимах в сфере цифровых инноваций в Российской Федерации», в порядке и на условиях, которые предусмотрены указанными федеральными законами;</Block>
      <Block>5.4.12. осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.</Block>
      <Block>5.5. К обработке персональных данных допускаются работники Оператора, в должностные обязанности которых входит обработка персональных данных.</Block>
      <Block>5.6. Обработка персональных данных осуществляется путем:</Block>
      <Block>5.6.1. получения персональных данных в устной и письменной форме непосредственно от субъектов персональных данных;</Block>
      <Block>5.6.2. получения персональных данных из общедоступных источников;</Block>
      <Block>5.6.3. внесения персональных данных в журналы, реестры и информационные системы Оператора;</Block>
      <Block>5.6.4. использования иных способов обработки персональных данных.</Block>
      <Block>5.7. Не допускается раскрытие третьим лицам и распространение персональных данных без согласия субъекта персональных данных, если иное не предусмотрено Законом о персональных данных. Согласие на обработку персональных данных, разрешенных субъектом персональных данных для распространения, оформляется отдельно от иных согласий субъекта персональных данных на обработку его персональных данных.</Block>
      <Block>5.8. Передача персональных данных органам дознания и следствия, в Федеральную налоговую службу, Пенсионный фонд Российской Федерации, Фонд социального страхования и другие уполномоченные органы исполнительной власти и организации осуществляется в соответствии с требованиями законодательства Российской Федерации.</Block>
      <Block>5.9. Оператор при обработке персональных данных принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных. Обеспечение безопасности персональных данных достигается Оператором, посредством:</Block>
      <Block>5.9.1. определения угроз безопасности персональных данных при их обработке;</Block>
      <Block>5.9.2. принятия локальных нормативных актов и иные документов, регулирующих отношения в сфере обработки и защиты персональных данных;</Block>
      <Block>5.9.3. назначения лиц, ответственных за обеспечение безопасности персональных данных в структурных подразделениях и информационных системах Оператора;</Block>
      <Block>5.9.4. создания необходимых условий для работы с персональными данными;</Block>
      <Block>5.9.5. организации учета документов, содержащих персональные данные;</Block>
      <Block>5.9.6. организации работы с информационными системами, в которых обрабатываются персональные данные;</Block>
      <Block>5.9.7. хранения персональных данных в условиях, при которых обеспечивается их сохранность и исключается неправомерный доступ к ним;</Block>
      <Block>5.9.8. организации обучения работников Оператора, осуществляющих обработку персональных данных.</Block>
      <Block>5.10. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен Федеральным законом &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ, договором.</Block>
      <Block>5.11. При сборе персональных данных, в том числе посредством информационно-телекоммуникационной сети Интернет, Оператор обеспечивает запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение персональных данных граждан Российской Федерации с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев, указанных в Федеральном законе &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ.</Block>
      <H3>6. Порядок актуализации, исправления, удаления и уничтожение персональных данных</H3>
      <Block>6.1. Подтверждение факта обработки персональных данных Оператором, правовые основания и цели обработки персональных данных, а также иные сведения, указанные в ч. 7 ст. 14 Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ, предоставляются Оператором субъекту персональных данных или его представителю при обращении либо при получении запроса субъекта персональных данных или его представителя. В предоставляемые сведения не включаются персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Запрос должен содержать:</Block>
      <Block>6.1.1. номер основного документа, удостоверяющего личность субъекта персональных данных или его представителя, сведения о дате выдачи указанного документа и выдавшем его органе;</Block>
      <Block>6.1.2. сведения, подтверждающие участие субъекта персональных данных в отношениях с Оператором (номер договора, дата заключения договора, условное словесное обозначение и (или) иные сведения), либо сведения, иным образом подтверждающие факт обработки персональных данных Оператором;</Block>
      <Block>6.1.3. подпись субъекта персональных данных или его представителя. Запрос может быть направлен в форме электронного документа и подписан электронной подписью в соответствии с законодательством Российской Федерации. Если в обращении (запросе) субъекта персональных данных не отражены в соответствии с требованиями Закона о персональных данных все необходимые сведения или субъект персональных данных не обладает правами доступа к запрашиваемой информации, то ему направляется мотивированный отказ. Право субъекта персональных данных на доступ к его персональным данным может быть ограничено в соответствии с ч. 8 ст. 14 Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ, в том числе если доступ субъекта персональных данных к его персональным данным нарушает права и законные интересы третьих лиц.</Block>
      <Block>6.2. В случае выявления неправомерной обработки персональных данных при обращении (запросе) субъекта персональных данных или его представителя либо уполномоченного органа по защите прав субъектов персональных данных Оператор осуществляет блокирование неправомерно обрабатываемых персональных данных, относящихся к этому субъекту персональных данных, с момента такого обращения или получения запроса.</Block>
      <Block>6.3. При достижении целей обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку персональные данные подлежат уничтожению, если:</Block>
      <Block>6.3.1. иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных, иным соглашением между оператором и субъектом (ч. 4 ст. 21 Федерального закона &ldquo;О персональных данных&rdquo; от 27.07.2006 № 152-ФЗ);</Block>
      <Block>6.4.2. Оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Законом о персональных данных или иными федеральными законами.</Block>
      <H3>7. Изменение Политики</H3>
      <Block>7.1. Оператор имеет право вносить изменения в настоящую Политику. При внесении изменений в заголовке Политики указывается дата последнего обновления редакции. Новая редакция Политики вступает в силу с момента ее размещения на сайте Оператора, если иное не предусмотрено новой редакцией Политики.</Block>
      <Block>7.2. Действующая электронная версия Политики хранится — на сайте Оператора по адресу <a target="_blank" href="https://madjoylab.ru/#clients" title="">https://madjoylab.ru/#clients</a></Block>
    </Container>
  </section>
  );
};
