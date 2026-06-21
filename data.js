// ==========================================
// ملف data.js - سكنكو (معدل)
// ==========================================

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
        images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=80"],
        desc: "شقة مميزة جداً تشطيب لوكس، قريبة من الخدمات والمواصلات والجامعة.",
        features: ["واي فاي", "تكييف", "غسالة", "ثلاجة"]
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
    {
        id: "SK-113",
        title: "فيلا سكن طالبات - شمال الجامعة (مستوى فندقي)",
        city: "شمال الجامعة",
        type: "بنات",
        price: "1300 جنيه / شهرياً",
        priceDetails: { "غرفة دابل": "1400 جنيه", "غرفة تريبل": "1300 جنيه" },
        roomsCount: 3,
        totalBeds: 7,
        bedsAvailable: 7,
        images: [
            "https://i.ibb.co/jPNLgmgK/IMG-20260606-WA0007.jpg",
            "https://i.ibb.co/dZbjqg1/IMG-20260606-WA0006.jpg",
            "https://i.ibb.co/6Jr2w0dj/IMG-20260606-WA0004.jpg",
            "https://i.ibb.co/ycYvnw2X/IMG-20260606-WA0008.jpg",
            "https://i.ibb.co/CKpw9bwB/IMG-20260606-WA0002.jpg",
            "https://i.ibb.co/57hHMh1/IMG-20260606-WA0003.jpg",
            "https://i.ibb.co/gMq8DCSr/IMG-20260606-WA0005.jpg"
        ],
        desc: "فيلا سكن طالبات مميزة مكونة من 4 أدوار، تحتوي على 3 غرف (2 دابل + 1 تريبل) بشمال الجامعة. موقع استراتيجي قريب جداً من سفنكس والجامعة الأهلية، مع توفير كافة سبل الراحة والأمان.",
        features: ["سيارة خاصة", "كاميرات مراقبة", "إشراف أمني", "ديب فريزر", "واي فاي"]
    }
];

let filteredRooms = [...roomsData];
let currentLimit = 4;
const cardsPerPage = 4;

function renderCards() {
    const grid = document.getElementById("listings-grid");
    const loadMoreContainer = document.getElementById("load-more-container");
    grid.innerHTML = "";

    const visibleRooms = filteredRooms.slice(0, currentLimit);

    if (visibleRooms.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">لا توجد سكنات تطابق الفلتر..</div>`;
        loadMoreContainer.style.display = "none";
        return;
    }

    visibleRooms.forEach(room => {
        const isFull = room.bedsAvailable === 0;
        grid.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div class="card-img-wrapper">
                    <span class="badge-id">${room.id}</span>
                    <span class="badge-type">${room.type}</span>
                    ${isFull ? '<div class="badge-status-full">مكتمل</div>' : ''}
                    <img src="${room.images[0]}" alt="${room.title}">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${room.title}</h3>
                    <ul class="card-info" style="list-style:none; padding:0; margin:10px 0;">
                        <li><i class="fa-solid fa-location-dot"></i> ${room.city}</li>
                        <li><i class="fa-solid fa-door-open"></i> ${room.roomsCount} غرف / ${room.totalBeds} سرير</li>
                        <li><i class="fa-solid fa-bed"></i> متاح: ${room.bedsAvailable} سرير</li>
                    </ul>
                    <div class="price-tag" style="font-weight:bold; color:var(--primary-color);">${room.price}</div>
                    <div class="card-actions" style="margin-top:10px;">
                        <button class="btn btn-details" onclick="openModal('${room.id}')">التفاصيل</button>
                        <button class="btn btn-book ${isFull ? 'btn-disabled' : ''}" onclick="bookNowAlert('${room.id}')">احجز الآن</button>
                    </div>
                </div>
            </div>
        `);
    });
    loadMoreContainer.style.display = (currentLimit >= filteredRooms.length) ? "none" : "block";
}

function loadMoreCards() {
    currentLimit += cardsPerPage;
    renderCards();
}

function openModal(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    const modal = document.getElementById("details-modal");
    document.getElementById("modal-title").innerText = room.title;
    document.getElementById("modal-desc").innerText = room.desc;
    
    document.getElementById("modal-img").src = room.images[0];

    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    thumbnailsContainer.innerHTML = ""; 
    if (room.images.length > 1) {
        room.images.forEach((imgSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = imgSrc;
            thumb.alt = "صورة مصغرة للسكن";
            if(index === 0) thumb.classList.add("active-thumb");
            
            thumb.onclick = function() {
                document.getElementById("modal-img").src = imgSrc;
                document.querySelectorAll("#modal-thumbnails img").forEach(img => img.classList.remove("active-thumb"));
                this.classList.add("active-thumb");
            };
            thumbnailsContainer.appendChild(thumb);
        });
    }

    const featuresList = document.getElementById("modal-features");
    featuresList.innerHTML = ""; 
    if (room.features && room.features.length > 0) {
        room.features.forEach(feature => {
            featuresList.innerHTML += `<div><i class="fa-solid fa-check-circle" style="color: var(--primary-color);"></i> ${feature}</div>`;
        });
    }

    const modalSubmitBtn = document.getElementById("modal-submit-btn");
    modalSubmitBtn.setAttribute("onclick", `bookNowAlert('${room.id}')`);
    
    if (room.bedsAvailable === 0) {
        modalSubmitBtn.classList.add("btn-disabled");
        modalSubmitBtn.innerText = "عذراً، السكن مكتمل";
        modalSubmitBtn.removeAttribute("onclick");
    } else {
        modalSubmitBtn.classList.remove("btn-disabled");
        modalSubmitBtn.innerText = "احجز السكن الآن";
    }

    const oldPrice = document.getElementById("modal-price-container");
    if (oldPrice) oldPrice.remove();

    let priceHTML = `<div id="modal-price-container" style="margin: 15px 0; padding: 15px; background: rgba(108, 43, 161, 0.1); border-radius: 8px;">
        <h4 style="color: var(--primary-color); margin-bottom: 10px;">💰 تفاصيل الأسعار:</h4>`;
    if (room.priceDetails) {
        Object.entries(room.priceDetails).forEach(([k, v]) => {
            priceHTML += `<div style="display:flex; justify-content:space-between; border-bottom:1px dashed #ccc; padding:5px 0;"><span>${k}</span> <strong>${v}</strong></div>`;
        });
    } else {
        priceHTML += `<div style="display:flex; justify-content:space-between; padding:5px 0;"><span>السعر:</span> <strong>${room.price}</strong></div>`;
    }
    priceHTML += `</div>`;

    document.getElementById("modal-desc").insertAdjacentHTML('afterend', priceHTML);
    modal.classList.add("active");
}

function bookNowAlert(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    let msg = `🏠 أهلاً سكنكو.. أرغب في الاستفسار عن السكن:\n\n`;
    msg += `📌 كود السكن: ${room.id}\n`;
    msg += `🏠 العنوان: ${room.title}\n`;
    msg += `📍 المنطقة: ${room.city}\n`;
    msg += `👥 النوع: ${room.type}\n`;
    
    if (room.priceDetails) {
        msg += `\n💵 الأسعار:\n`;
        Object.entries(room.priceDetails).forEach(([k, v]) => {
            msg += `- ${k}: ${v}\n`;
        });
    } else {
        msg += `💰 السعر: ${room.price}\n`;
    }

    if (room.features && room.features.length > 0) {
        msg += `\n✨ المميزات:\n- ${room.features.join('\n- ')}\n`;
    }

    msg += `\n💬 هل السكن متاح حالياً للمعاينة؟`;

    window.open(`https://wa.me/201025910607?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================
// الدوال الجديدة المضافة
// ==========================================

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("sakanko-theme", "light");
    } else {
        localStorage.removeItem("sakanko-theme");
    }
}

function resetFilters() {
    document.getElementById("city-filter").value = "all";
    document.getElementById("type-filter").value = "all";
    filteredRooms = [...roomsData];
    currentLimit = cardsPerPage;
    renderCards();
}

function filterRooms() {
    const city = document.getElementById("city-filter").value;
    const type = document.getElementById("type-filter").value;
    filteredRooms = roomsData.filter(r => (city === "all" || r.city === city) && (type === "all" || r.type === type));
    currentLimit = cardsPerPage;
    renderCards();
}

function applySavedTheme() {
    const saved = localStorage.getItem("sakanko-theme");
    if (saved === "light") document.body.classList.add("light-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    renderCards();
});
