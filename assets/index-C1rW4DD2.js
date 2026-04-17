(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p=["Restaurants","Electronics Repair","Fitness & Gyms","Supermarkets","Salons"],u=["Baner","Hinjewadi","Kothrud","Wakad","Aundh"],m=[{id:"1",name:"Shree Restaurant",category:"Restaurants",location:"Baner",rating:4.3,phone:"9876543210",description:"A family-friendly restaurant offering North Indian and Chinese cuisine with a cozy ambiance.",services:[{name:"North Indian Food",price:"₹300"},{name:"Chinese Food",price:"₹250"},{name:"Home Delivery"}],timings:"11:00 AM – 11:00 PM",image:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",reviews:[{id:"r1",userName:"Rahul Sharma",rating:5,comment:"Great food and quick service!"},{id:"r2",userName:"Priya Patil",rating:4,comment:"Nice ambiance and tasty food."}]},{id:"2",name:"TechFix Solutions",category:"Electronics Repair",location:"Hinjewadi",rating:4.6,phone:"9123456780",description:"Reliable repair services for laptops, mobiles, and other electronic devices with quick turnaround time.",services:[{name:"Laptop Repair",price:"₹800"},{name:"Mobile Repair",price:"₹500"},{name:"Data Recovery"}],timings:"10:00 AM – 8:00 PM",image:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800",reviews:[{id:"r3",userName:"Amit Joshi",rating:5,comment:"TechFix repaired my laptop within a day. Highly recommended!"}]},{id:"3",name:"FitZone Gym",category:"Fitness & Gyms",location:"Kothrud",rating:4.2,phone:"9988776655",description:"A fully equipped gym with certified trainers, personal training, and group workout sessions.",services:[{name:"Monthly Membership",price:"₹1500"},{name:"Personal Training"},{name:"Zumba Classes"}],timings:"6:00 AM – 10:00 PM",image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",reviews:[]},{id:"4",name:"Fresh Mart Grocery",category:"Supermarkets",location:"Wakad",rating:4.1,phone:"9871234567",description:"A neighborhood grocery store offering fresh produce, daily essentials, and home delivery.",services:[{name:"Fruits & Vegetables"},{name:"Dairy Products"},{name:"Home Delivery"}],timings:"8:00 AM – 10:00 PM",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",reviews:[]},{id:"5",name:"Urban Cuts Salon",category:"Salons",location:"Aundh",rating:4.5,phone:"9012345678",description:"A modern salon offering haircuts, styling, grooming, and beauty services for men and women.",services:[{name:"Haircut",price:"₹300"},{name:"Hair Spa"},{name:"Facial"},{name:"Beard Styling"}],timings:"9:00 AM – 9:00 PM",image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",reviews:[{id:"r4",userName:"Neha Kulkarni",rating:4,comment:"Urban Cuts gives very professional service."}]}];let i={searchQuery:"",selectedCategory:"All",selectedLocation:"All",selectedBusinessId:null};const l={Restaurants:'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',"Electronics Repair":'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',"Fitness & Gyms":'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>',Supermarkets:'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',Salons:'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',Default:'<svg class="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',MapPin:'<svg class="w-4 h-4 mr-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',Phone:'<svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',Clock:'<svg class="w-4 h-4 mr-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',Check:'<svg class="w-5 h-5 text-indigo-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>'};function h(t){return l[t]||l.Default}function g(t){let r="";for(let s=1;s<=5;s++)s<=Math.round(t)?r+='<svg class="w-4 h-4 text-amber-400 fill-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':r+='<svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';return`<div class="flex items-center space-x-1">${r}<span class="text-sm font-medium ml-1 text-gray-700">${t}</span></div>`}document.addEventListener("DOMContentLoaded",()=>{w(),d(),document.getElementById("searchInput").addEventListener("input",t=>{i.searchQuery=t.target.value.toLowerCase(),d()}),document.getElementById("locationFilter").addEventListener("change",t=>{i.selectedLocation=t.target.value,d()})});window.goHome=function(){i.selectedBusinessId=null,document.getElementById("detailView").classList.add("hidden"),document.getElementById("listingView").classList.remove("hidden"),window.scrollTo(0,0)};window.viewBusiness=function(t){i.selectedBusinessId=t,document.getElementById("listingView").classList.add("hidden"),document.getElementById("detailView").classList.remove("hidden"),v(),window.scrollTo(0,0)};window.openPhone=function(t,r){t.stopPropagation(),window.location.href=`tel:${r}`};window.toggleSupportModal=function(){const t=document.getElementById("supportModal");t.classList.contains("hidden")?(t.classList.remove("hidden"),document.body.style.overflow="hidden"):(t.classList.add("hidden"),document.body.style.overflow="")};function w(){const t=document.getElementById("categoryFilters");let r=`<button onclick="setCategory('All')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-colors bg-indigo-600 text-white shadow-sm" data-category="All">All</button>`;p.forEach(e=>{r+=`<button onclick="setCategory('${e}')" class="category-btn flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200" data-category="${e}"><span>${e}</span></button>`}),t.innerHTML=r;const s=document.getElementById("locationFilter");let n='<option value="All">All Areas in Pune</option>';u.forEach(e=>{n+=`<option value="${e}">${e}</option>`}),s.innerHTML=n}window.setCategory=function(t){i.selectedCategory=t,document.querySelectorAll(".category-btn").forEach(r=>{r.getAttribute("data-category")===t?r.className="category-btn flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-indigo-600 text-white shadow-sm":r.className="category-btn flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"}),d()};function d(){const t=m.filter(e=>{const o=e.name.toLowerCase().includes(i.searchQuery)||e.category.toLowerCase().includes(i.searchQuery),a=i.selectedCategory==="All"||e.category===i.selectedCategory,c=i.selectedLocation==="All"||e.location===i.selectedLocation;return o&&a&&c});document.getElementById("resultsCount").innerText=`${t.length} results`;const r=document.getElementById("businessGrid"),s=document.getElementById("emptyState");if(t.length===0){r.innerHTML="",s.classList.remove("hidden");return}s.classList.add("hidden");let n="";t.forEach(e=>{const o=e.services.slice(0,2).map(c=>`<span class="inline-flex items-center px-2 py-1 rounded bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">${c.name}</span>`).join(""),a=e.services.length>2?`<span class="inline-flex items-center px-2 py-1 rounded bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500">+${e.services.length-2} more</span>`:"";n+=`
      <div onclick="viewBusiness('${e.id}')" class="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col">
        <div class="h-48 w-full relative overflow-hidden bg-gray-100">
          <img src="${e.image}" alt="${e.name}" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-sm">
            <svg class="w-3.5 h-3.5 text-amber-500 fill-amber-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span class="text-sm font-bold text-gray-900">${e.rating}</span>
          </div>
          <div class="absolute bottom-3 left-3 bg-white/95 text-indigo-700 backdrop-blur-sm p-2.5 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
            ${h(e.category)}
          </div>
        </div>
        <div class="p-5 flex-grow">
          <h3 class="text-xl font-bold text-gray-900 mb-1 leading-tight">${e.name}</h3>
          <p class="text-gray-500 text-sm flex items-center mb-3 mt-1">
            ${l.MapPin} ${e.location}, Pune
          </p>
          <p class="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">${e.description}</p>
          <div class="flex flex-wrap gap-2 mt-auto">
            ${o}
            ${a}
          </div>
        </div>
        <div class="border-t border-gray-50 p-4 bg-gray-50/50 flex justify-between items-center group-hover:bg-indigo-50/50 transition-colors">
          <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">View Details</span>
          <div onclick="openPhone(event, '${e.phone}')" class="text-gray-400 group-hover:text-indigo-600 transition-colors p-1.5 rounded-full hover:bg-white flex items-center justify-center bg-white border border-gray-200" style="width:36px;height:36px;" title="Call Now">
            <svg class="w-4 h-4 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
        </div>
      </div>
    `}),r.innerHTML=n}function v(){const t=m.find(e=>e.id===i.selectedBusinessId),r=document.getElementById("detailView");if(!t)return;const s=t.services.map(e=>`
    <div class="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div class="flex items-center space-x-3 text-gray-800 font-medium">
        ${l.Check}
        <span>${e.name}</span>
      </div>
      ${e.price?`<span class="text-gray-900 font-semibold bg-gray-50 px-3 py-1 rounded-md text-sm border border-gray-100">${e.price}</span>`:""}
    </div>
  `).join(""),n=t.reviews.length>0?t.reviews.map(e=>`
    <div class="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold text-gray-900">${e.userName}</span>
        ${g(e.rating)}
      </div>
      <p class="text-gray-600 italic">"${e.comment}"</p>
    </div>
  `).join(""):'<p class="text-gray-500">No reviews yet. Be the first to review!</p>';r.innerHTML=`
    <button onclick="goHome()" class="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors mb-6 font-medium">
      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      <span>Back to listings</span>
    </button>
    
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="h-64 sm:h-96 relative w-full border-b border-gray-100">
        <img src="${t.image}" alt="${t.name}" referrerpolicy="no-referrer" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
      </div>
      
      <div class="p-6 sm:p-10 border-b border-gray-100">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-3">
              ${h(t.category)}
              <span>${t.category}</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">${t.name}</h1>
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <div class="flex items-center">${l.MapPin} ${t.location}, Pune</div>
              <div class="flex items-center">${l.Clock} ${t.timings}</div>
            </div>
            ${g(t.rating)}
          </div>
          
          <a href="tel:${t.phone}" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm w-full sm:w-auto">
            ${l.Phone}
            Call Now
          </a>
        </div>
        
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">About</h3>
          <p class="text-gray-600 leading-relaxed">${t.description}</p>
        </div>
      </div>
      
      <div class="p-6 sm:p-10 bg-gray-50/50">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Services & Pricing</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${s}
        </div>
      </div>
      
      <div class="p-6 sm:p-10 border-t border-gray-100">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">User Reviews</h3>
        ${n}
      </div>
    </div>
  `}
