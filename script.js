const dialog = document.querySelector('#class-dialog');
const dialogTitle = dialog.querySelector('h2');
const dialogDescription = dialog.querySelector('.dialog-description');
const dialogIcon = dialog.querySelector('.dialog-course-icon');
const classDetails = {
  'اخترفیزیک و نجوم': {
    description: 'با شگفتی‌های آسمان، ستارگان، سیارات و کهکشان‌ها آشنا شو. رازهای جهان هستی را با مشاهده و فعالیت‌های علمی کشف کن. نگاهی تازه به آسمان داشته باش و دنیای بی‌پایان فضا را بشناس.',
  },
  'برنامه‌نویسی با پایتون': {
    title: 'برنامه‌نویسی پایتون',
    description: 'قدم به دنیای جذاب برنامه‌نویسی و فناوری بگذار. با زبان پایتون، تفکر منطقی و حل مسئله را تمرین کن. ایده‌هایت را به برنامه‌ها و پروژه‌های خلاقانه تبدیل کن.',
  },
  'معماری و سازه': {
    description: 'با اصول طراحی، معماری و ساخت سازه‌های مختلف آشنا شو. خلاقیت و دانش مهندسی را در ساخت ماکت‌ها به کار بگیر. یاد بگیر چگونه ایده‌هایت را به سازه‌هایی واقعی تبدیل کنی.',
  },
  'زیست و آزمایشگاه': {
    description: 'به دنیای شگفت‌انگیز موجودات زنده و طبیعت سفر کن. با میکروسکوپ و آزمایش‌های علمی، رازهای حیات را کشف کن. مهارت مشاهده، پژوهش و تفکر علمی را در خود پرورش بده.',
  },
  'شیمی و آزمایشگاه': {
    description: 'دنیای جذاب مواد، عناصر و واکنش‌های شیمیایی را بشناس. با انجام آزمایش‌های ایمن، پدیده‌های علمی را تجربه کن. از مشاهده تغییرات مواد لذت ببر و رازهای شیمی را کشف کن.',
  },
  رباتیک: {
    description: 'وارد دنیای هیجان‌انگیز ربات‌ها و فناوری‌های هوشمند شو. با طراحی، ساخت و برنامه‌ریزی ربات‌ها مهارت کسب کن. خلاقیت و تفکر مهندسی را برای حل چالش‌های واقعی به کار بگیر.',
  },
  داستان‌نویسی: {
    description: 'به دنیای خیال‌انگیز قصه‌ها و شخصیت‌های داستانی قدم بگذار. با اصول داستان‌نویسی، شخصیت‌پردازی و روایت آشنا شو. تخیل و احساساتت را به داستان‌هایی جذاب و ماندگار تبدیل کن.',
  },
};
const closeDialog = () => {
  dialog.classList.remove('open');
  dialog.setAttribute('aria-hidden', 'true');
};

document.querySelectorAll('.class-card button').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.class-card');
    const className = card.dataset.class;
    const detail = classDetails[className];
    dialogTitle.textContent = detail.title || className;
    dialogDescription.textContent = detail.description;
    dialogIcon.src = card.querySelector('.course-icon').src;
    dialogIcon.alt = `${dialogTitle.textContent} icon`;
    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');
  });
});

dialog.querySelectorAll('.close, .close-text').forEach((button) => button.addEventListener('click', closeDialog));
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDialog(); });
