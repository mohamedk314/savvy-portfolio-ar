/** @format */
/* components/TermsContent.tsx
   Bilingual (AR/EN) Terms populated from your PDF.
   Uses a simple language toggle. Same theme tokens.
*/
"use client";
import { useState } from "react";

type Lang = "ar" | "en";

export default function TermsContent() {
  const [lang, setLang] = useState<Lang>("ar");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className='space-y-6 text-sm md:text-[15px]'>
      {/* Language toggle */}
      <div className='flex items-center justify-center gap-2'>
        <button
          onClick={() => setLang("ar")}
          className={`rounded-xl border px-3 py-1 ${
            lang === "ar"
              ? "border-primary text-primary"
              : "border-white/20 text-white/70 hover:text-white"
          }`}>
          العربية
        </button>
        <button
          onClick={() => setLang("en")}
          className={`rounded-xl border px-3 py-1 ${
            lang === "en"
              ? "border-primary text-primary"
              : "border-white/20 text-white/70 hover:text-white"
          }`}>
          English
        </button>
      </div>

      {lang === "en" ? <EnglishTerms /> : <ArabicTerms />}
    </div>
  );
}

/* ========= ENGLISH ========= */
function EnglishTerms() {
  return (
    <div className='space-y-6 leading-7'>
      <p>
        Welcome to <strong>SAVVY</strong>. By using our website or services, you
        agree to these Terms and Conditions together with our Privacy Policy.
        These terms outline the rules and regulations for using SAVVY Services’
        website at <span className='underline'>https://savvyeg.com</span>. Do
        not use the website if you do not agree with all terms stated here.
      </p>

      <Section title='1) Content and Changes'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            Website information is for service explanation and implementation.
          </li>
          <li>Information is subject to change without notice.</li>
          <li>SAVVY may modify the Terms. Review periodically.</li>
        </ul>
      </Section>

      <Section title='2) Cookies and Data Use'>
        <p>
          We use cookies that may store personal information for specified uses.
          Cookies enable certain functionalities and improve your experience.
          Some affiliate/advertising partners may also use cookies.
        </p>
      </Section>

      <Section title='3) Liability and Limitations'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            SAVVY is not liable for failures beyond our control including
            technological issues.
          </li>
          <li>
            No partnership or legal agency relationship is formed with users.
          </li>
          <li>
            As long as the website and information/services are provided free of
            charge, we are not liable for any loss or damage of any nature.
          </li>
        </ul>
      </Section>

      <Section title='4) Intellectual Property'>
        <p>
          All materials on the website are owned by or licensed to us.
          Unauthorized use is prohibited.
        </p>
        <p className='mt-2 font-medium'>You must not:</p>
        <ul className='list-disc ps-5 space-y-1'>
          <li>Republish material from SAVVY.</li>
          <li>Sell, rent, or sub-license material from SAVVY.</li>
          <li>Reproduce, duplicate, or copy material from SAVVY.</li>
          <li>Redistribute content from SAVVY.</li>
        </ul>
      </Section>

      <Section title='5) External Links'>
        <p>
          External links may be provided for convenience. We do not bear
          responsibility for their content.
        </p>
      </Section>

      <Section title='6) Jurisdiction'>
        <p>
          Use of the website and any disputes arising from it are subject to the
          laws of the Main Courts of Egypt.
        </p>
      </Section>

      <Section title='7) Booking and Payment'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            Fees paid are generally non-refundable. Pricing may be updated.
          </li>
          <li>You are responsible for taxes except those on our income.</li>
          <li>
            Payments may be charged through specified methods (e.g., credit card
            or cash) via the website.
          </li>
          <li>
            Payments accepted online using Visa and MasterCard in EGP. Refunds,
            if applicable, are processed to the original payment method.
          </li>
        </ul>
      </Section>

      <Section title='8) Rate Changes'>
        <p>
          We may change rates and post changes on our website. We are not
          required to post temporary promotions or rate reductions.
        </p>
      </Section>

      <Section title='9) Service Provider Conduct'>
        <p>
          We are not liable for unlawful acts of service professionals or users,
          though we conduct background checks.
        </p>
      </Section>

      <Section title='10) User Responsibility and Age Restriction'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            Users should exercise caution for personal safety and property.
          </li>
          <li>
            We are not responsible for damages or missing items during services.
          </li>
          <li>Users must be 18+ to register or transact on the website.</li>
        </ul>
      </Section>

      <Section title='11) Damage Responsibility'>
        <p>
          We may penalize service providers for damages. We are not responsible
          for client belongings during the service session.
        </p>
      </Section>

      <Section title='12) Terms Enforcement and Severability'>
        <p>
          If any terms are unenforceable, they will be limited to maintain the
          overall force of the Terms.
        </p>
      </Section>

      <Section title='13) Communication'>
        <p>
          We may use channels including WhatsApp and email for appointments and
          marketing updates.
        </p>
      </Section>

      <Section title='14) Service Scope'>
        <p>
          SAVVY aggregates various home services provided by licensed third
          parties.
        </p>
      </Section>

      <Section title='15) Medical Data and Liability (Lab Test services)'>
        <p>
          For Lab Test services, SAVVY acts as an aggregator. Medical data is
          handled by healthcare facilities which bear medical liability.
        </p>
      </Section>

      <Section title='16) Quality Assurance and Issue Reporting'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            We conduct regular inspections and follow-ups to ensure service
            quality.
          </li>
          <li>
            Report missing/stolen items within 48 hours and damaged items within
            24 hours.
          </li>
        </ul>
      </Section>

      <Section title='17) Comments and Moderation'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            To the extent permitted by law, SAVVY is not liable for Comments or
            any liability, damages, or expenses from their
            use/posting/appearance.
          </li>
          <li>
            We reserve the right to monitor and remove Comments considered
            inappropriate, offensive, or in breach of these Terms.
          </li>
          <li>
            Comments must not be defamatory, libelous, offensive, indecent,
            unlawful, or invasive of privacy and must not solicit/promote
            business or unlawful activity.
          </li>
        </ul>
      </Section>

      <Section title='18) IFrames'>
        <p>
          Without prior written approval, you may not create frames around our
          web pages that alter the visual presentation or appearance of our
          website.
        </p>
      </Section>

      <Section title='19) Reservation of Rights and Linking'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            We may request removal of all or any particular links to our
            website. You agree to remove links immediately upon request.
          </li>
          <li>
            We may amend these terms and the linking policy at any time. By
            continuously linking to our website, you agree to be bound by these
            terms.
          </li>
          <li>
            If you find any link on our website offensive, you may contact us.
            We will consider requests but are not obligated to remove links or
            respond directly.
          </li>
        </ul>
      </Section>

      <Section title='20) No Warranties'>
        <p>
          We do not ensure information on this website is correct, complete, or
          up to date, nor that the website remains available.
        </p>
      </Section>

      <Section title='21) Disclaimer and Limitation of Liability'>
        <ul className='list-disc ps-5 space-y-1'>
          <li>
            To the maximum extent permitted by law, we exclude all
            representations, warranties, and conditions relating to this website
            and its use.
          </li>
          <li>
            Nothing in this disclaimer will limit or exclude liability for death
            or personal injury, fraud or fraudulent misrepresentation, or any
            liability not permitted to be excluded under applicable law.
          </li>
          <li>
            The limitations and prohibitions of liability govern all liabilities
            arising under the disclaimer, including those arising in contract,
            tort, and breach of statutory duty.
          </li>
        </ul>
      </Section>

      <FooterNote />
    </div>
  );
}

/* ========= ARABIC ========= */
function ArabicTerms() {
  return (
    <div className='space-y-6 leading-8'>
      <p>
        مرحبًا بك في <strong>سافي</strong>. باستخدامك موقعنا أو خدماتنا فأنت
        توافق على هذه الشروط والأحكام مع سياسة الخصوصية. تحدد هذه الشروط قواعد
        استخدام موقع سافي للخدمات على الرابط{" "}
        <span className='underline'>https://savvyeg.com</span>. إذا لم توافق على
        الشروط كاملة يُرجى عدم استخدام الموقع.
      </p>

      <Section title='١) المحتوى والتعديلات'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>المعلومات على الموقع لشرح الخدمات وتنفيذها.</li>
          <li>قد تتغير المعلومات دون إشعار مسبق.</li>
          <li>تحتفظ سافي بحق تعديل الشروط. يُرجى المراجعة دوريًا.</li>
        </ul>
      </Section>

      <Section title='٢) ملفات الارتباط والبيانات'>
        <p>
          نستخدم ملفات تعريف الارتباط وقد تخزن معلومات شخصية لأغراض محددة.
          تُستخدم لتمكين وظائف بالموقع وتحسين التجربة. قد يستخدم بعض شركاء
          الإعلانات ملفات الارتباط أيضًا.
        </p>
      </Section>

      <Section title='٣) المسؤولية والقيود'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>
            لا تتحمل سافي المسؤولية عن الإخفاقات الخارجة عن السيطرة بما فيها
            المشكلات التقنية.
          </li>
          <li>لا تنشأ أي شراكات أو وكالات قانونية مع المستخدمين.</li>
          <li>
            طالما يُقدّم الموقع والمعلومات/الخدمات مجانًا، فلن نكون مسؤولين عن
            أي خسائر أو أضرار من أي نوع.
          </li>
        </ul>
      </Section>

      <Section title='٤) الملكية الفكرية'>
        <p>
          جميع مواد الموقع مملوكة أو مرخصة لنا. يُحظر الاستخدام غير المصرح به.
        </p>
        <p className='mt-2 font-medium'>لا يجوز لك:</p>
        <ul className='list-disc pr-5 space-y-1'>
          <li>إعادة نشر مواد من سافي.</li>
          <li>بيع أو تأجير أو ترخيص فرعي لمواد سافي.</li>
          <li>استنساخ أو تكرار أو نسخ مواد سافي.</li>
          <li>إعادة توزيع محتوى سافي.</li>
        </ul>
      </Section>

      <Section title='٥) الروابط الخارجية'>
        <p>قد نوفر روابط خارجية للتسهيل دون تحمل مسؤولية محتواها.</p>
      </Section>

      <Section title='٦) الاختصاص القضائي'>
        <p>يخضع استخدام الموقع وأي نزاعات لقوانين محاكم مصر الرئيسية.</p>
      </Section>

      <Section title='٧) الحجز والدفع'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>
            الرسوم المدفوعة غالبًا غير قابلة للاسترداد. قد يتم تحديث الأسعار.
          </li>
          <li>تكون مسؤولًا عن الضرائب باستثناء الضرائب على دخلنا.</li>
          <li>يُحصّل الدفع عبر طرق محددة بالموقع مثل البطاقات أو النقد.</li>
          <li>
            تُقبل المدفوعات إلكترونيًا ببطاقات Visa وMasterCard بالجنيه المصري.
            يتم الاسترداد إن وُجد على وسيلة الدفع الأصلية.
          </li>
        </ul>
      </Section>

      <Section title='٨) تغييرات الأسعار'>
        <p>
          يجوز لنا تغيير الأسعار ونشرها على الموقع. لا يلزم نشر العروض المؤقتة
          أو التخفيضات.
        </p>
      </Section>

      <Section title='٩) سلوك مقدمي الخدمة'>
        <p>
          لسنا مسؤولين عن الأفعال غير القانونية للمهنيين أو المستخدمين مع إجراء
          فحوصات خلفية قدر الإمكان.
        </p>
      </Section>

      <Section title='١٠) مسؤولية المستخدم وقيود العمر'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>على المستخدم توخي الحذر لسلامته وممتلكاته.</li>
          <li>لسنا مسؤولين عن الأضرار أو المفقودات أثناء تقديم الخدمة.</li>
          <li>يجب أن يكون المستخدم 18+ للتسجيل أو التعامل عبر الموقع.</li>
        </ul>
      </Section>

      <Section title='١١) مسؤولية الأضرار'>
        <p>
          قد نفرض عقوبات على مقدّم الخدمة عند حدوث أضرار. لسنا مسؤولين عن
          مقتنيات العميل أثناء جلسة الخدمة.
        </p>
      </Section>

      <Section title='١٢) تنفيذ الشروط وقابليتها للفصل'>
        <p>
          إذا كانت أي شروط غير قابلة للتنفيذ فسيُحد نطاقها للحفاظ على القوة
          العامة للشروط.
        </p>
      </Section>

      <Section title='١٣) التواصل'>
        <p>
          نستخدم قنوات متعددة مثل واتساب والبريد الإلكتروني للمواعيد وتحديثات
          التسويق.
        </p>
      </Section>

      <Section title='١٤) نطاق الخدمة'>
        <p>تقوم سافي بتجميع خدمات منزلية متنوعة مقدمة من أطراف ثالثة مرخصة.</p>
      </Section>

      <Section title='١٥) البيانات والمسؤولية الطبية (خدمات التحاليل)'>
        <p>
          تعمل سافي كمجمّع لخدمات التحاليل. تُدار البيانات الطبية لدى المنشآت
          الصحية وهي تتحمل المسؤولية الطبية.
        </p>
      </Section>

      <Section title='١٦) ضمان الجودة والإبلاغ عن المشكلات'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>نجري فحوصات متابعة منتظمة لضمان الجودة.</li>
          <li>
            الإبلاغ عن عناصر مفقودة/مسروقة خلال 48 ساعة، والأضرار خلال 24 ساعة.
          </li>
        </ul>
      </Section>

      <Section title='١٧) التعليقات والإشراف'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>
            ضمن الحد الذي يسمح به القانون، لا تتحمل سافي مسؤولية التعليقات أو ما
            ينشأ عنها من أضرار أو نفقات.
          </li>
          <li>
            نحتفظ بحق مراقبة التعليقات وحذف ما يُعد مسيئًا أو مخالفًا للشروط.
          </li>
          <li>
            لا يجب أن تتضمن التعليقات مواد تشهيرية أو مسيئة أو غير قانونية ولا
            تُستخدم للترويج أو الأنشطة غير المشروعة.
          </li>
        </ul>
      </Section>

      <Section title='١٨) الإطارات (iFrames)'>
        <p>
          لا يجوز إنشاء إطارات حول صفحات موقعنا تغير العرض المرئي بدون موافقة
          كتابية مسبقة.
        </p>
      </Section>

      <Section title='١٩) احتفاظ بالحقوق والربط'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>
            يجوز لنا طلب إزالة جميع الروابط أو رابط معين إلى موقعنا. وتوافق على
            الإزالة فورًا عند الطلب.
          </li>
          <li>
            يجوز تعديل الشروط وسياسة الربط في أي وقت. استمرار الربط يعني موافقتك
            على هذه الشروط.
          </li>
          <li>
            إذا وجدت رابطًا مسيئًا يمكنك التواصل معنا. سننظر في الطلبات دون
            التزام بالإزالة أو الرد.
          </li>
        </ul>
      </Section>

      <Section title='٢٠) عدم تقديم ضمانات'>
        <p>
          لا نضمن صحة أو اكتمال المعلومات أو استمرار توفر الموقع أو تحديث مواده.
        </p>
      </Section>

      <Section title='٢١) إخلاء المسؤولية وتحديدها'>
        <ul className='list-disc pr-5 space-y-1'>
          <li>
            نستبعد إلى أقصى حد يسمح به القانون جميع الضمانات والتمثيلات المتعلقة
            بالموقع واستخدامه.
          </li>
          <li>
            لا شيء هنا يستبعد أو يحد المسؤولية عن الوفاة أو الإصابة الشخصية أو
            الاحتيال أو ما لا يجوز استبعاده قانونيًا.
          </li>
          <li>
            تسري القيود على جميع المسؤوليات الناشئة بموجب هذا الإخلاء بما في ذلك
            العقد والتقصير وخرق الواجبات القانونية.
          </li>
        </ul>
      </Section>

      <FooterNote />
    </div>
  );
}

/* ========= SHARED UI ========= */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='rounded-2xl border border-white/10 bg-white/5 p-5'>
      <h2 className='text-primary font-semibold mb-2'>{title}</h2>
      {children}
    </section>
  );
}

function FooterNote() {
  return (
    <p className='text-center text-xs text-white/50'>
      © {new Date().getFullYear()} SAVVY Services.
    </p>
  );
}
