// 1. قاعدة البيانات التجريبية للسكنات (تمت إضافة 5 سكنات جديدة ليصبح المجموع 11 سكن)
const roomsData = [
    {
        id: "SK-101",
        title: "شقة مفروشة مكيفة قريبة من البوابة الرئيسية",
        city: "شمال الجامعة",
        type: "شباب",
        price: "1200 جنيه / شهرياً",
        roomsCount: 3,       
        totalBeds: 6,        
        bedsAvailable: 2,    
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "شقة مميزة جداً تشطيب لوكس، قريبة من الخدمات والمواصلات والجامعة. الشقة مجهزة بالكامل للأولاد ومريحة جداً للمذاكرة.",
        features: ["واي فاي مجاني", "تكييف", "غسالة", "ثلاجة", "سخان غاز", "قريب من المواصلات"]
    },
    {
        id: "SK-102",
        title: "سكن بنات هادئ ونظيف جداً - غرف مزدوجة",
        city: "المرحلة الرابعة",
        type: "بنات",
        price: "1500 جنيه / شهرياً",
        roomsCount: 2,
        totalBeds: 4,
        bedsAvailable: 3,
        images: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "سكن مخصص للبنات في منطقة هادئة وآمنة تماماً. الغرف واسعة وبها إضاءة ممتازة، والمطبخ والحمام مجهزين بأحدث الأجهزة.",
        features: ["أمن وحراسة", "واي فاي سريع", "غسالة أوتوماتيك", "بوتاجاز", "ميكروويف"]
    },
    {
        id: "SK-103",
        title: "غرفة سينجل فاخرة لعشاق الهدوء والخصوصية",
        city: "رجال الاعمال",
        type: "شباب",
        price: "2000 جنيه / شهرياً",
        roomsCount: 1,
        totalBeds: 1,
        bedsAvailable: 0, 
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "غرفة فردية (سنجل) مكيفة بالكامل في حي رجال الأعمال الراقر. السكن هادئ جداً ومناسب لطلاب الطب والهندسة.",
        features: ["تكييف", "حمام خاص", "شاشة تلفزيون", "واي فاي", "تنظيف أسبوعي"]
    },
    {
        id: "SK-104",
        title: "شقة مشتركة قريبة من السوق والخدمات",
        city: "السوق الجديد",
        type: "شباب",
        price: "900 جنيه / شهرياً",
        roomsCount: 3,
        totalBeds: 6,
        bedsAvailable: 4,
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "شقة اقتصادية مريحة للشباب وسط منطقة الخدمات والسوق الجديد. كل شيء قريب منك والمواصلات متوفرة 24 ساعة.",
        features: ["سعر اقتصادية", "ثلاجة", "غسالة", "قريب من السوق"]
    },
    {
        id: "SK-105",
        title: "سكن بنات راقي جداً بجوار الخدمات مباشرة",
        city: "العشر عماير وعماير محلب",
        type: "بنات",
        price: "1350 جنيه / شهرياً",
        roomsCount: 4,
        totalBeds: 8,
        bedsAvailable: 1,
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "مكان مميز جداً للبنات في عماير محلب، شقة مجهزة بالكامل والفرش جديد تماماً. متاح آخر سرير في غرفة ثنائية.",
        features: ["كاتل ومطبخ مجهز", "سخان", "واي فاي", "قريب جداً من الجامعة"]
    },
    {
        id: "SK-106",
        title: "استوديو مفروش بالكامل للمذاكرة والتركيز",
        city: "السوق القديم",
        type: "شباب",
        price: "1600 جنيه / شهرياً",
        roomsCount: 1,
        totalBeds: 2,
        bedsAvailable: 0,
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "استوديو مستقل مناسب لطالب أو طالبين يحبون الاستقلالية التامة. مجهز بجميع الأدوات الأساسية والفرش بحالة ممتازة.",
        features: ["مدخل خاص", "واي فاي", "بوتاجاز وغاز طبيعي", "ثلاجة"]
    },
    {
        id: "SK-107",
        title: "شقة ثلاثية واسعة للشباب إطلالة على الشارع الرئيسي",
        city: "شمال الجامعة",
        type: "شباب",
        price: "1100 جنيه / شهرياً",
        roomsCount: 3,
        totalBeds: 9,
        bedsAvailable: 5,
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "شقة طلابية كبيرة وممتازة للمجموعات، الغرف واسعة جداً وبها تهوية ممتازة، قريبة جداً من الكافيهات والمطاعم.",
        features: ["غسالة أوتوماتيك", "واي فاي", "شرفة واسعة", "ثلاجة كبيرة", "بجوار موقف الباص"]
    },
    {
        id: "SK-108",
        title: "سكن بنات فاخر غرف مفردة مكيفة بالكامل",
        city: "رجال الاعمال",
        type: "بنات",
        price: "2200 جنيه / شهرياً",
        roomsCount: 4,
        totalBeds: 4,
        bedsAvailable: 2,
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "لكل من تبحث عن الخصوصية والراحة التامة، شقة مخصصة للبنات غرف سنجل مستقلة، أثاث مودرن جديد وأجهزة كهربائية حديثة.",
        features: ["تكييف لكل غرفة", "أمن 24 ساعة", "واي فاي فايبر", "تنظيف دوري", "شاشة سمارت"]
    },
    {
        id: "SK-109",
        title: "شقة اقتصادية للشباب غرف ثلاثية مجهزة",
        city: "السوق القديم",
        type: "شباب",
        price: "850 جنيه / شهرياً",
        roomsCount: 2,
        totalBeds: 6,
        bedsAvailable: 3,
        images: [
            "https://images.unsplash.com/photo-1544457038-1026d536c997?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "سكن شبابي مناسب للميزانيات البسيطة، يقع في منطقة حيوية مليئة بمحلات الأكل والخدمات، مصاريف الكهرباء والغاز مشتركة وقليلة.",
        features: ["سعر مناسب جداً", "غاز طبيعي", "ثلاجة", "قريب من المواصلات"]
    },
    {
        id: "SK-110",
        title: "سكن بنات مميز وهادئ قريب من المجمع الطبي",
        city: "المرحلة الرابعة",
        type: "بنات",
        price: "1400 جنيه / شهرياً",
        roomsCount: 3,
        totalBeds: 6,
        bedsAvailable: 0,
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "سكن ممتاز وهادئ جداً للبنات، الشقة مكيفة بالكامل والفرش نظيف ومعقم. يفضل لمنتسبات الكليات الطبية لقرابة الموقع.",
        features: ["بيئة هادئة للمذاكرة", "تكييف", "كاتل ميكروويف", "واي فاي سريع"]
    },
    {
        id: "SK-111",
        title: "شقة دوبلكس فاخرة مشتركة للشباب غرف ثنائية",
        city: "العشر عماير وعماير محلب",
        type: "شباب",
        price: "1750 جنيه / شهرياً",
        roomsCount: 4,
        totalBeds: 8,
        bedsAvailable: 4,
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "سكن شبابي VIP بنظام دوبلكس، صالة استقبال ضخمة وشاشات عرض، مناسب جداً للطلاب الذين يبحثون عن الرفاهية والراحة أثناء الدراسة.",
        features: ["صالة ألعاب صغيرة", "تكييفات مركزية", "إنترنت فائق السرعة", "تراس كبير", "فلتر مياه"]
    },
      {
        id: "SK-112",
        title: "غرفة سينجل فاخرة لعشاق الهدوء والخصوصية",
        city: "رجال الاعمال",
        type: "شباب",
        price: "2000 جنيه / شهرياً",
        roomsCount: 1,
        totalBeds: 1,
        bedsAvailable: 0, 
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80"
        ],
        desc: "غرفة فردية (سنجل) مكيفة بالكامل في حي رجال الأعمال الراقر. السكن هادئ جداً ومناسب لطلاب الطب والهندسة.",
        features: ["تكييف", "حمام خاص", "شاشة تلفزيون", "واي فاي", "تنظيف أسبوعي"]
    },
];

// 2. المتغيرات الأساسية للتحكم في العرض
let filteredRooms = [...roomsData];
let currentLimit = 4; 
const cardsPerPage = 4; 

// 3. دالة بناء الكروت وعرضها في الصفحة (تم تحديث البيانات المعروضة)
function renderCards() {
    const grid = document.getElementById("listings-grid");
    const loadMoreContainer = document.getElementById("load-more-container");
    grid.innerHTML = "";

    const visibleRooms = filteredRooms.slice(0, currentLimit);

    if (visibleRooms.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-body); font-size: 18px;">مفيش سكنات بتطابق الفلاتر دي حالياً.. جرب تختار حاجة تانية!</div>`;
        loadMoreContainer.style.display = "none";
        return;
    }

    visibleRooms.forEach(room => {
        const isFull = room.bedsAvailable === 0;
        
        // تجهيز بادج الحالة والسرير المتاح
        const statusBadge = isFull ? `<div class="badge-status-full">مكتمل الحجز</div>` : '';
        const bedText = isFull 
            ? `<span class="bed-status text-full"><i class="fa-solid fa-circle-xmark"></i> مكتمل الحجز</span>` 
            : `<span class="bed-status text-available"><i class="fa-solid fa-bed"></i> متاح ${room.bedsAvailable} سراير حالياً</span>`;
        
        const cardHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    <span class="badge-id">${room.id}</span>
                    <span class="badge-type">${room.type}</span>
                    ${statusBadge}
                    <img src="${room.images[0]}" alt="${room.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title" title="${room.title}">${room.title}</h3>
                    <ul class="card-info">
                        <li><i class="fa-solid fa-location-dot"></i> <span>${room.city}</span></li>
                        <li><i class="fa-solid fa-door-open"></i> <span>تقسيم السكن: ${room.roomsCount} غرف / ${room.totalBeds} سراير</span></li>
                        <li>${bedText}</li>
                    </ul>
                    <div class="price-tag">${room.price}</div>
                    <div class="card-actions">
                        <button class="btn btn-details" onclick="openModal('${room.id}')">التفاصيل</button>
                        <button class="btn btn-book ${isFull ? 'btn-disabled' : ''}" onclick="bookNowAlert('${room.id}', ${isFull})">احجز الآن</button>
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML("beforeend", cardHTML);
    });

    if (currentLimit >= filteredRooms.length) {
        loadMoreContainer.style.display = "none";
    } else {
        loadMoreContainer.style.display = "block";
    }
}

// 4. دالة تشغيل الفلاتر
function filterRooms() {
    const cityValue = document.getElementById("city-filter").value;
    const typeValue = document.getElementById("type-filter").value;

    filteredRooms = roomsData.filter(room => {
        const matchesCity = (cityValue === "all" || room.city === cityValue);
        const matchesType = (typeValue === "all" || room.type === typeValue);
        return matchesCity && matchesType;
    });

    currentLimit = cardsPerPage;
    renderCards();
}

// 5. دالة زر "عرض المزيد"
function loadMoreCards() {
    currentLimit += cardsPerPage;
    renderCards();
}

// 6. دالة إعادة تعيين الفلاتر
function resetFilters() {
    const resetIcon = document.getElementById("reset-icon");
    resetIcon.classList.add("spin-animation");
    setTimeout(() => resetIcon.classList.remove("spin-animation"), 500);

    document.getElementById("city-filter").value = "all";
    document.getElementById("type-filter").value = "all";

    filteredRooms = [...roomsData];
    currentLimit = cardsPerPage;
    renderCards();
}

// 7. فتح النافذة المنبثقة (Modal) وعرض تفاصيل السكن بالكامل
function openModal(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    const modal = document.getElementById("details-modal");
    
    document.getElementById("modal-title").innerText = room.title;
    document.getElementById("modal-desc").innerText = room.desc;
    
    const mainImg = document.getElementById("modal-img");
    mainImg.src = room.images[0];

    const thumbContainer = document.getElementById("modal-thumbnails");
    thumbContainer.innerHTML = "";
    
    room.images.forEach((imgUrl, index) => {
        const activeClass = index === 0 ? "active-thumb" : "";
        const thumbHTML = `<img src="${imgUrl}" class="${activeClass}" onclick="changeModalImage(this, '${imgUrl}')" alt="صورة فرعية">`;
        thumbContainer.insertAdjacentHTML("beforeend", thumbHTML);
    });

    const featuresList = document.getElementById("modal-features");
    featuresList.innerHTML = "";
    room.features.forEach(feat => {
        featuresList.insertAdjacentHTML("beforeend", `<div><i class="fa-solid fa-circle-check"></i> <span>${feat}</span></div>`);
    });

    const modalSubmitBtn = document.getElementById("modal-submit-btn");
    if (room.bedsAvailable === 0) {
        modalSubmitBtn.innerText = "مكتمل الحجز تماماً";
        modalSubmitBtn.className = "btn btn-disabled";
        modalSubmitBtn.onclick = null;
    } else {
        modalSubmitBtn.innerText = "احجز السكن الآن";
        modalSubmitBtn.className = "btn btn-book";
        modalSubmitBtn.onclick = function() { bookNowAlert(room.id, false); };
    }

    modal.classList.add("active");
}

// 8. تغيير الصورة الرئيسية عند الضغط على الـ Thumbnail
function changeModalImage(thumbElement, imgUrl) {
    document.getElementById("modal-img").src = imgUrl;
    const thumbs = document.querySelectorAll(".thumbnail-container img");
    thumbs.forEach(t => t.classList.remove("active-thumb"));
    thumbElement.classList.add("active-thumb");
}

// 9. إغلاق النافذة المنبثقة
function closeModal() {
    document.getElementById("details-modal").classList.remove("active");
}

window.onclick = function(event) {
    const modal = document.getElementById("details-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// 10. دالة الأكشن عند الضغط على "احجز الآن" (إرسال تفاصيل السكن كاملة بما فيها التقسيم عبر الواتساب)
function bookNowAlert(roomId, isDisabled) {
    if (isDisabled) return;
    
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    const phoneNumber = "201025910607"; 
    
    const message = `اهلا سكنكو 👋
بستفسر بخصوص السكن دا :

🆔 كود السكن: ${room.id}
🏠 نوع السكن: سكن ${room.type}
📍 الموقع: ${room.city}
🚪 تقسيم السكن: ${room.roomsCount} غرف / ${room.totalBeds} سراير
🛏️ السراير المتاحة: ${room.bedsAvailable} سرير متاح
💰 السعر: ${room.price}
📝 تفاصيل إضافية: ${room.title}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ====================================================
// نظام التحكم في ثيم الليل والنهار (Dark / Light Mode)
// ====================================================
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    if (body.classList.contains("light-mode")) {
        // التحويل للوضع الليلي (الافتراضي)
        body.classList.remove("light-mode");
        themeIcon.className = "fa-solid fa-sun";
        themeText.innerText = "الوضع النهاري";
        localStorage.setItem("sakanko-theme", "dark");
    } else {
        // التحويل للوضع النهاري
        body.classList.add("light-mode");
        themeIcon.className = "fa-solid fa-moon";
        themeText.innerText = "الوضع الليلي";
        localStorage.setItem("sakanko-theme", "light");
    }
}

// دالة تطبيق الثيم المحفوظ عند تحميل الصفحة
function applySavedTheme() {
    const savedTheme = localStorage.getItem("sakanko-theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    // التحقق لو كان المستخدم اختار وضع النهار سابقاً
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        if (themeIcon && themeText) {
            themeIcon.className = "fa-solid fa-moon";
            themeText.innerText = "الوضع الليلي";
        }
    }
}

// 11. تشغيل الدالة لأول مرة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme(); // تطبيق الثيم أولاً لمنع وميض الألوان
    renderCards();
});