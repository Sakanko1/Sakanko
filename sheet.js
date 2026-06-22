// 1. ضع سكناتك القديمة هنا داخل هذه المصفوفة بنفس طريقتك
const oldSakans = [
    {
        id: sk-100,
        title: "سكن الأوائل",
        city: "أسيوط الجديدة",
        type: "بنات",
        price: "700",
        distance: "بجوار الجامعة",
        capacity: "3 غرف و 6 أسرة",
        availableBeds: 2,
        images: [
            "https://via.placeholder.com/300x200?text=صورة+السكن", // ضع لينك الصورة الأولى هنا
            "" // لينك الصورة الثانية
        ]
    },
    // ضيف باقي سكناتك القديمة هنا بنفس الشكل...
];

// 2. إعدادات الاتصال بجوجل شيت
const SHEET_ID = '1-prwS5d357F0Yw7iZ_CzFAR0sZs4U_99LvAXO2JDftM';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// 3. دالة موحدة لإنشاء وعرض كارت السكن
function displaySakan(sakan) {
    const container = document.getElementById('sakan-container');
    
    // استخراج أول صورة لعرضها، لو مفيش هنحط صورة افتراضية رمادية
    let firstImage = 'https://via.placeholder.com/300x200?text=لا+توجد+صورة';
    
    // لو السكن من المصفوفة القديمة (فيها الصور كـ Array)
    if (sakan.images && Array.isArray(sakan.images) && sakan.images.length > 0 && sakan.images[0]) {
        firstImage = sakan.images[0];
    } 
    // لو السكن من جوجل شيت (الصورة جاية كنص عادي من الخلية)
    else if (typeof sakan.images === 'string' && sakan.images.trim() !== '') {
        // لو حاطط كذا لينك بينهم فاصل في الشيت، هناخد أول لينك بس
        firstImage = sakan.images.split(',')[0].trim();
    }

    container.innerHTML += `
        <div data-id="${sakan.id || ''}" style="border: 1px solid #ddd; padding: 15px; border-radius: 10px; width: 300px; text-align: right; background: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: flex; flex-direction: column;">
            <img src="${firstImage}" alt="صورة السكن" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
            <span style="background: #eee; padding: 3px 8px; border-radius: 5px; font-size: 12px; color: #555; align-self: flex-start;">رقم السكن: ${sakan.id || '-'}</span>
            <h3 style="color: #333; margin-top: 10px;">${sakan.title || 'بدون اسم'}</h3>
            <p><strong>المدينة:</strong> ${sakan.city || 'غير محدد'}</p>
            <p><strong>النوع:</strong> ${sakan.type || 'غير محدد'}</p>
            <p><strong>السعر:</strong> ${sakan.price || 'غير محدد'} جنيه</p>
            <p><strong>المسافة:</strong> ${sakan.distance || 'غير محدد'}</p>
            <p><strong>السعة:</strong> ${sakan.capacity || 'غير محدد'}</p>
            <p><strong>متاح أسرة:</strong> ${sakan.availableBeds || 'غير محدد'}</p>
        </div>
    `;
}

// 4. عرض السكنات القديمة فوراً
const container = document.getElementById('sakan-container');
container.innerHTML = ''; // تنظيف المكان في البداية
oldSakans.forEach(sakan => {
    displaySakan(sakan);
});

// 5. دالة سحب وعرض السكنات الجديدة من جوجل شيت
async function fetchNewSakanData() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));
        const rows = json.table.rows;

        rows.forEach(row => {
            const data = row.c;
            if (!data || !data[1]) return; // تجاهل الصفوف الفارغة في الشيت

            // تحضير بيانات السكن القادمة من الشيت
            const newSakan = {
                id: data[0]?.v,          // العمود A (الرقم)
                title: data[1]?.v,       // العمود B (اسم السكن)
                city: data[2]?.v,        // العمود C (المنطقة)
                type: data[3]?.v,        // العمود D (بنات/أولاد)
                price: data[4]?.v,       // العمود E (السعر)
                distance: data[5]?.v,    // العمود F (المسافة)
                capacity: data[6]?.v,    // العمود G (عدد الغرف والأسرة)
                availableBeds: data[7]?.v, // العمود H (العدد المتاح)
                images: data[8]?.v       // العمود I (لينك الصورة)
            };

            // عرض السكن الجديد بجانب السكنات القديمة
            displaySakan(newSakan);
        });
    } catch (error) {
        console.error("حصل مشكلة في سحب البيانات من جوجل شيت:", error);
    }
}

// تشغيل دالة سحب البيانات الجديدة
fetchNewSakanData();
