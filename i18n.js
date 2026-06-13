// ==========================================================
// Language translations (English default, Bangla optional)
// ==========================================================

const translations = {
  en: {
    // Common
    toggle_lang: "বাংলা",
    app_title: "📁 Document Vault",

    // index.html (login/signup)
    tab_login: "Login",
    tab_signup: "Sign Up",
    label_email: "Email",
    label_password: "Password",
    label_password_min: "Password (min 6 characters)",
    btn_login: "Login",
    btn_signup: "Create Account",
    forgot_link: "Forgot password?",
    msg_logging_in: "Logging in...",
    msg_wrong_credentials: "Incorrect email or password.",
    msg_creating_account: "Creating account...",
    msg_account_created: "Account created! Please log in (verify your email if required).",

    // dashboard.html
    logout: "Logout",
    dashboard_title: "📁 My Documents",
    upload_btn: "Upload",
    th_filename: "File Name",
    th_date: "Uploaded On",
    th_actions: "Actions",
    btn_download: "Download",
    btn_delete: "Delete",
    empty_note: "No files uploaded yet.",
    msg_uploading: "Uploading...",
    msg_select_file: "Please select a file.",
    msg_upload_failed: "Upload failed: ",
    msg_upload_success: "Upload successful!",
    confirm_delete: "Are you sure you want to delete this file?",
    alert_download_failed: "Could not create download link: ",
    alert_delete_failed: "Delete failed: ",

    // forgot-password.html
    reset_title: "🔑 Reset Password",
    otp_intro: "Enter your email and we will send you an OTP code.",
    btn_send_otp: "Send OTP",
    label_otp_code: "OTP code (sent to your email)",
    label_new_password: "New Password",
    btn_reset_password: "Reset Password",
    back_to_login: "Back to Login",
    msg_sending_otp: "Sending OTP...",
    msg_otp_sent: "An OTP code has been sent to your email.",
    msg_verifying: "Verifying...",
    msg_wrong_otp: "Incorrect OTP code. Please try again.",
    msg_password_changed: "Password changed successfully! Redirecting to login..."
  },

  bn: {
    // Common
    toggle_lang: "English",
    app_title: "📁 Document Vault",

    // index.html (login/signup)
    tab_login: "লগইন",
    tab_signup: "নতুন অ্যাকাউন্ট",
    label_email: "ইমেইল",
    label_password: "পাসওয়ার্ড",
    label_password_min: "পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)",
    btn_login: "লগইন করুন",
    btn_signup: "অ্যাকাউন্ট তৈরি করুন",
    forgot_link: "পাসওয়ার্ড ভুলে গেছেন?",
    msg_logging_in: "লগইন হচ্ছে...",
    msg_wrong_credentials: "ভুল ইমেইল বা পাসওয়ার্ড।",
    msg_creating_account: "অ্যাকাউন্ট তৈরি হচ্ছে...",
    msg_account_created: "অ্যাকাউন্ট তৈরি হয়েছে! এখন লগইন করুন (প্রয়োজনে ইমেইল ভেরিফাই করুন)।",

    // dashboard.html
    logout: "লগআউট",
    dashboard_title: "📁 আমার ডকুমেন্ট",
    upload_btn: "আপলোড করুন",
    th_filename: "ফাইলের নাম",
    th_date: "আপলোডের তারিখ",
    th_actions: "অ্যাকশন",
    btn_download: "ডাউনলোড",
    btn_delete: "ডিলিট",
    empty_note: "কোনো ফাইল আপলোড করা হয়নি।",
    msg_uploading: "আপলোড হচ্ছে...",
    msg_select_file: "একটি ফাইল নির্বাচন করুন।",
    msg_upload_failed: "আপলোড ব্যর্থ: ",
    msg_upload_success: "আপলোড সফল হয়েছে!",
    confirm_delete: "আপনি কি নিশ্চিত এই ফাইলটি ডিলিট করতে চান?",
    alert_download_failed: "ডাউনলোড লিংক তৈরি করা যায়নি: ",
    alert_delete_failed: "ডিলিট ব্যর্থ: ",

    // forgot-password.html
    reset_title: "🔑 পাসওয়ার্ড রিসেট",
    otp_intro: "আপনার ইমেইল দিন, একটি OTP কোড পাঠানো হবে।",
    btn_send_otp: "OTP পাঠান",
    label_otp_code: "ইমেইলে পাওয়া OTP কোড",
    label_new_password: "নতুন পাসওয়ার্ড",
    btn_reset_password: "পাসওয়ার্ড পরিবর্তন করুন",
    back_to_login: "লগইন পেইজে ফিরে যান",
    msg_sending_otp: "OTP পাঠানো হচ্ছে...",
    msg_otp_sent: "আপনার ইমেইলে একটি OTP কোড পাঠানো হয়েছে।",
    msg_verifying: "যাচাই করা হচ্ছে...",
    msg_wrong_otp: "ভুল OTP কোড। আবার চেষ্টা করুন।",
    msg_password_changed: "পাসওয়ার্ড পরিবর্তন হয়েছে! লগইন পেইজে নিয়ে যাওয়া হচ্ছে..."
  }
};

// Get current language (default English)
function getLang() {
  return localStorage.getItem('lang') || 'en';
}

// Translate helper for dynamic messages in JS
function t(key) {
  const lang = getLang();
  return translations[lang][key] || translations['en'][key] || key;
}

// Apply translations to all elements with data-i18n attribute
function applyLang() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update toggle button label
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = t('toggle_lang');
  });
}

// Toggle between English and Bangla
function toggleLang() {
  const current = getLang();
  const next = current === 'en' ? 'bn' : 'en';
  localStorage.setItem('lang', next);
  applyLang();
}

// Apply translations as soon as the page loads
document.addEventListener('DOMContentLoaded', applyLang);
