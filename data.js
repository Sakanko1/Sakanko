// ==========================================
// ملف data.js - سكنكو (معدل)
// ==========================================

// --- الدالة الذكية لتنظيف الروابط (تم إضافتها هنا) ---
function getCleanUrl(url) {
    if (typeof url !== 'string') return url;
    if (url.includes('<img')) {
        const match = url.match(/src=["'](.*?)["']/);
        return match ? match[1] : url;
    }
    return url;
}
// ---------------------------------------------------

function closeModal() {
    document.getElementById("details-modal").classList.remove("active");
}

const roomsData = [
{
    id: "SK-101",
    title: "سكن شباب متميز - 17 ط أمام كافتريا قصر الشوق",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1750 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
        "https://i.ibb.co/1G0hSzcn/IMG-20260607-WA0155.jpg",
        "https://i.ibb.co/q3JGX17K/IMG-20260607-WA0154.jpg",
        "https://i.ibb.co/twQRghvT/IMG-20260607-WA0153.jpg",
        "https://i.ibb.co/Nd0yCmwy/IMG-20260607-WA0152.jpg"
    ],
    desc: "سكن شباب بموقع متميز في 17 ط، أمام كافتريا قصر الشوق مباشرة. السكن مجهز بتكييفين (حالة زيرو) لضمان أعلى درجات الراحة. مثالي للطلاب الباحثين عن الهدوء والخدمات المتكاملة.",
    features: ["تكييفين بحالة الزيرو", "موقع حيوي", "قرب الخدمات", "مساحة مريحة"]
},
   {
    id: "SK-102",
    title: "شقة مميزة بالمرحلة الرابعة - بجوار الجامعة الأهلية",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1350 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 5,
    bedsAvailable: 5,
    images: [
"https://i.ibb.co/WvbvBg0R/IMG-20260606-WA0088.jpg",
"https://i.ibb.co/dwN33J9J/IMG-20260606-WA0087.jpg",
"https://i.ibb.co/7JmnjVF0/IMG-20260606-WA0086.jpg",
"https://i.ibb.co/d4xxHP2v/IMG-20260606-WA0085.jpg",
"https://i.ibb.co/67xW67R8/IMG-20260606-WA0084.jpg",
"https://i.ibb.co/Cs48nf7n/IMG-20260606-WA0083.jpg",
"https://i.ibb.co/mFgrDX0m/IMG-20260606-WA0082.jpg",
"https://i.ibb.co/q3Ptt4Qv/IMG-20260606-WA0081.jpg",
"https://i.ibb.co/4gYHvk4q/IMG-20260606-WA0080.jpg",
    ],
    desc: "شقة في موقع استراتيجي بالمرحلة الرابعة على الشارع الرئيسي، بجوار الجامعة الأهلية وقسم الشرطة ومديرية الأمن مباشرة. خدمات متكاملة خلف البيت، ومواصلات متوفرة أمام البيت مباشرة. السعر للعام الجديد.",
    features: ["موقع مميز", "قرب المواصلات", "بجوار الجامعة", "خدمات متوفرة"]
},
    {
    id: "SK-103",
    title: "سكن شباب متميز - 17 ط أمام كافتريا قصر الشوق",
    city: "السوق القديم",
    type: "شباب",
    price: "1750 جنيه / شهرياً",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
"https://i.ibb.co/1G0hSzcn/IMG-20260607-WA0155.jpg",
"https://i.ibb.co/q3JGX17K/IMG-20260607-WA0154.jpg",
"https://i.ibb.co/twQRghvT/IMG-20260607-WA0153.jpg",
"https://i.ibb.co/Nd0yCmwy/IMG-20260607-WA0152.jpg",
    ],
    desc: "سكن شباب بموقع متميز في 17 ط، أمام كافتريا قصر الشوق مباشرة. السكن مجهز بتكييفين (حالة زيرو) لضمان أعلى درجات الراحة. مثالي للطلاب الباحثين عن الهدوء والخدمات المتكاملة.",
    features: ["تكييفين بحالة الزيرو", "موقع حيوي", "قرب الخدمات", "مساحة مريحة"]
},
    {
    id: "SK-104",
    title: "فيلا 319 - المرحلة العاجلة (أمام مسجد الصحابة)",
    city: "المرحلة العاجلة",
    type: "شباب", // أو "بنات" حسب التوجيه
    price: "9000 جنيه / شهرياً",
    priceDetails: { "غرفة دابل": "1400 جنيه", "غرفة تريبل": "1300 جنيه" , "غرفة سنجل": "1200 جنيه" },
    roomsCount: 3, 
    totalBeds: 6, // تم تقديرها بناءً على تقسيم الغرف (تربل، دبل، سنجل)
    bedsAvailable: 6,
    images: [
        "https://i.ibb.co/NdDM3RZj/image.jpg",
        "https://i.ibb.co/VWJFg3tj/image.jpg",
        "https://i.ibb.co/VpgKwYTr/image.jpg",
        "https://i.ibb.co/2TDfzMz/image.jpg",
        "https://i.ibb.co/dwGLjjm4/image.jpg",
        "https://i.ibb.co/hvswBns/image.jpg",
        "https://i.ibb.co/tTWW96HZ/image.jpg",
        "https://i.ibb.co/Df6tZprN/image.jpg",
        "https://i.ibb.co/FLK4QfL5/image.jpg",
        "https://i.ibb.co/SDqk6mXF/image.jpg",
        "https://i.ibb.co/fdmSjKyT/image.jpg",
        "https://i.ibb.co/DHLz637H/image.jpg",
        "https://i.ibb.co/HfmDzjkR/image.jpg"
    ],
    desc: "فيلا 319 بالمرحلة العاجلة، موقع استراتيجي أمام مسجد الصحابة وقريبة من المدرسة الثانوية. السكن يوفر خيارات متنوعة للغرف (غرف تربل، غرف دبل، وغرف سنجل) لتناسب كافة الاحتياجات. نرحب بالمعاينة على الطبيعة لتقدير مستوى السكن.",
    features: ["موقع متميز", "خيارات غرف متعددة", "قرب الخدمات", "مساحة واسعة"]
},
    {
    id: "SK-105",
    title: "سكن شباب متميز - ابني بيتك الخامسة",
    city: "ابني بيتك الخامسة",
    type: "شباب",
    price: "1200 جنيه / شهرياً للسرير",
    roomsCount: 2, 
    totalBeds: 4,
    bedsAvailable: 4,
    images: [
        "https://i.ibb.co/RpsLPcwr/image.jpg",
        "https://i.ibb.co/4RVtF9CB/image.jpg",
        "https://i.ibb.co/7x4LTPdZ/image.jpg",
        "https://i.ibb.co/Gvs9WWGq/image.jpg",
        "https://i.ibb.co/wryG1XF5/image.jpg",
        "https://i.ibb.co/5XrHYLHb/image.jpg"
    ],
    desc: "سكن مخصص للشباب في منطقة ابني بيتك الخامسة، يتميز بموقع استراتيجي قريب جداً من الموقف والسوق لسهولة التنقل وتلبية الاحتياجات اليومية. السكن يوفر 4 أسرّة مريحة.",
    features: ["قرب الموقف", "قرب السوق", "موقع حيوي", "سكن مخصص للشباب"]
},
   {
    id: "SK-106",
    title: "سكن شباب بالمرحلة الرابعة - تجهيز متكامل",
    city: "المرحلة الرابعة",
    type: "شباب",
    price: "1200 جنيه / شهرياً للسرير",
    roomsCount: 3, 
    totalBeds: 7,
    bedsAvailable: 7,
    images: [
        "https://i.ibb.co/tThGF2dJ/image.jpg",
        "https://i.ibb.co/r2nCQqG8/image.jpg",
        "https://i.ibb.co/SD3pyg2w/image.jpg",
        "https://i.ibb.co/zTFBmNSX/image.jpg",
        "https://i.ibb.co/MyYzyvZG/image.jpg",
        "https://i.ibb.co/KpCFSGSC/image.jpg",
        "https://i.ibb.co/m5X6f661/image.jpg",
        "https://i.ibb.co/Kc3Z5W0v/image.jpg",
        "https://i.ibb.co/xtshmGbC/image.jpg",
        "https://i.ibb.co/twYMTBr9/image.jpg",
        "https://i.ibb.co/xtbgPFLp/image.jpg",
        "https://i.ibb.co/Y425SQwP/image.jpg",
        "https://i.ibb.co/xnsd1GW/image.jpg",
        "https://i.ibb.co/G3p7cQhr/image.jpg",
        "https://i.ibb.co/mFPDvVLG/image.jpg",
        "https://i.ibb.co/gMtYgX9S/image.jpg",
        "https://i.ibb.co/fVN5LKFn/image.jpg",
        "https://i.ibb.co/prd4SNj7/image.jpg",
        "https://i.ibb.co/5XGvLT0B/image.jpg",
        "https://i.ibb.co/Gvs9WWGq/image.jpg",
        "https://i.ibb.co/XxjjN2dD/image.jpg"
    ],
    desc: "سكن شباب متميز في المرحلة الرابعة، يتكون من 3 غرف واسعة بإجمالي 7 أسرّة. السكن مجهز بالكامل ويوفر بيئة مريحة للطلاب.",
    features: ["موقع مميز", "3 غرف", "تجهيز كامل", "بيئة هادئة"]
},
   {
    id: "SK-107",
    title: "سكن شباب - شمال الجامعة (عند سوبر ماركت أبو دياب)",
    city: "شمال الجامعة",
    type: "شباب",
    price: "1200 - 1300 جنيه / شهرياً",
    roomsCount: 3, 
    totalBeds: 7,
    bedsAvailable: 7,
    images: [
        "https://i.ibb.co/BH7rptyv/image.jpg",
        "https://i.ibb.co/bMhdt187/image.jpg",
        "https://i.ibb.co/VWVgMXYP/image.jpg",
        "https://i.ibb.co/DDPrH9Vj/image.jpg",
        "https://i.ibb.co/kg6yrkB2/image.jpg",
        "https://i.ibb.co/39K2mxjG/image.jpg",
        "https://i.ibb.co/7xdmMzjN/image.jpg",
        "https://i.ibb.co/DHjSXRc5/image.jpg",
        "https://i.ibb.co/cXk0YNM5/image.jpg",
        "https://i.ibb.co/tTxNSPdk/image.jpg",
        "https://i.ibb.co/pjrRGBzt/image.jpg",
        "https://i.ibb.co/Fk1J3MdG/image.jpg",
        "https://i.ibb.co/tpMPs3sq/image.jpg",
        "https://i.ibb.co/zhTtMv7J/image.jpg"
    ],
    desc: "سكن مميز في شمال الجامعة بجوار سوبر ماركت أبو دياب ويوجد كافيه بالأسفل. السكن يتكون من دورين (أرضي وأول علوي) ويحتوي على غرفتين دابل (سعر السرير 1300) وغرفة ترابل (سعر السرير 1200).",
    features: ["موقع حيوي", "كافيه ملحق بالبيت", "قرب الخدمات", "خيارات غرف متعددة"]
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
        features: ["سيارة خاصة", "كاميرات مراقبة", "إشراف أمني", "ديب فريزر", "واي فاي"],
        video: "dQw4w9WgXcQ"
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
                    
                    <!-- تم تعديل السطر ده علشان يستخدم الدالة الذكية -->
                    <img src="${getCleanUrl(room.images[0])}" alt="${room.title}">
                    
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
    // --- إضافة زرار الفيديو ديناميكياً تحت الوصف ---
    const oldVideoBtn = document.getElementById("modal-video-btn");
    if (oldVideoBtn) oldVideoBtn.remove();

    if (room.video && room.video.trim() !== "") {
        const videoBtn = document.createElement("a");
        videoBtn.id = "modal-video-btn";
        videoBtn.href = `https://www.youtube.com/watch?v=${room.video}`;
        videoBtn.target = "_blank";
        videoBtn.innerHTML = `<i class="fa-brands fa-youtube" style="margin-left: 8px; color: #ff0000;"></i>مشاهدة فيديو السكن`;
        
        videoBtn.style.display = "inline-flex";
        videoBtn.style.alignItems = "center";
        videoBtn.style.justifyContent = "center";
        videoBtn.style.marginTop = "15px";
        videoBtn.style.padding = "10px 20px";
        videoBtn.style.backgroundColor = "#fff";
        videoBtn.style.border = "2px solid #8a2be2";
        videoBtn.style.color = "#8a2be2";
        videoBtn.style.borderRadius = "8px";
        videoBtn.style.textDecoration = "none";
        videoBtn.style.fontWeight = "bold";
        videoBtn.style.cursor = "pointer";
        videoBtn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        
        document.getElementById("modal-desc").after(videoBtn);
    }
    // --------------------------------------------
    document.getElementById("modal-title").innerText = room.title;
    document.getElementById("modal-desc").innerText = room.desc;
    
    document.getElementById("modal-img").src = getCleanUrl(room.images[0]);

    const thumbnailsContainer = document.getElementById("modal-thumbnails");
    thumbnailsContainer.innerHTML = ""; 
    if (room.images.length > 1) {
        room.images.forEach((imgSrc, index) => {
            const thumb = document.createElement("img");
            thumb.src = getCleanUrl(imgSrc);

            thumb.alt = "صورة مصغرة للسكن";
            if(index === 0) thumb.classList.add("active-thumb");
            
            thumb.onclick = function() {
                    document.getElementById("modal-img").src = getCleanUrl(imgSrc); 
                    
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