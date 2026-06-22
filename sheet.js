// 1. إعدادات الاتصال بجوجل شيت
const SHEET_ID = '1-prwS5d357F0Yw7iZ_CzFAR0sZs4U_99LvAXO2JDftM';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// 2. دالة جلب البيانات من الشيت وتحويلها لتطابق قالب سكنكو الأساسي
async function fetchNewSakanData() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));
        const rows = json.table.rows;

        rows.forEach((row, index) => {
            // تلافي قراءة الصف الأول (صف العناوين)
            if (index === 0) return; 

            const data = row.c;
            if (!data || !data[1] || data[1].v === 'title') return; // تجاهل الصفوف الفاضية

            // تقسيم الصور
            let imagesArray = [];
            if (data[8] && data[8].v) {
                imagesArray = data[8].v.split(',').map(url => url.trim());
            }

            // تقسيم المميزات
            let featuresArray = [];
            if (data[9] && data[9].v) {
                featuresArray = data[9].v.split(',').map(f => f.trim());
            }

            // ذكاء اصطناعي مصغر لفك خانة السعة (مثال: 3 غرف و 6 أسرة) واستخراج الأرقام منها
            let rooms = 0;
            let beds = 0;
            if (data[6] && data[6].v) {
                const textCapacity = String(data[6].v);
                const numbers = textCapacity.match(/\d+/g); // استخراج الأرقام
                if (numbers && numbers.length >= 2) {
                    rooms = parseInt(numbers[0]);
                    beds = parseInt(numbers[1]);
                } else if (numbers && numbers.length === 1) {
                    rooms = parseInt(numbers[0]);
                    beds = parseInt(numbers[0]) * 2; // افتراضي لو مفيش رقم تاني
                }
            }

            // استخراج عدد الأسرة المتاحة من خانة availableBeds كـ رقم مجرد
            let available = 0;
            if (data[7] && data[7].v) {
                const textAvailable = String(data[7].v);
                const numbers = textAvailable.match(/\d+/g);
                available = numbers ? parseInt(numbers[0]) : parseInt(textAvailable) || 0;
            }

            // بناء الكائن بالمسميات المطابقة لـ data.js بالملي
            const newSakan = {
                id: data[0] ? String(data[0].v).toUpperCase() : "SK-" + (100 + index),                
                title: data[1] ? data[1].v : '',                     
                city: data[2] ? data[2].v : '',                      
                type: data[3] ? data[3].v : 'شباب',                      
                price: data[4] ? String(data[4].v) : '',             
                roomsCount: rooms, 
                totalBeds: beds,
                bedsAvailable: available,
                images: imagesArray,                                 
                desc: data[5] ? data[5].v : '', // متوافق مع "desc" وليس "description"
                features: featuresArray,                             
                video: data[10] ? String(data[10].v) : ''
            };

            if (typeof roomsData !== 'undefined') {
                if (!roomsData.some(r => r.id.toLowerCase() === newSakan.id.toLowerCase())) {
                    roomsData.push(newSakan);
                }
            }
        });

        if (typeof renderCards === 'function') {
            filteredRooms = [...roomsData]; 
            if (typeof currentLimit !== 'undefined' && typeof cardsPerPage !== 'undefined') {
                currentLimit = cardsPerPage; 
            }
            renderCards(); 
            console.log("تم دمج البيانات وحل مشكلة الـ undefined بنجاح!");
        }

    } catch (error) {
        console.error("حصل مشكلة في سحب البيانات من جوجل شيت:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchNewSakanData);