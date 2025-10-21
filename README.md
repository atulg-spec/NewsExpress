# 📰 NewsExpress

**A responsive web application that fetches and displays the latest BBC News headlines using the NewsAPI.**  
Built with **HTML, CSS, JavaScript, and Bootstrap**, it offers a modern, card-based interface and a loading spinner for a smooth user experience.

---

## 🚀 Features

- **Responsive Design** — Built with Bootstrap 5 for optimal viewing on all devices  
- **Live News Feed** — Fetches real-time news from BBC News via NewsAPI  
- **Loading Indicator** — Displays a spinner while news articles are being fetched  
- **Organized Layout** — News displayed in Bootstrap cards featuring:
  - Article images  
  - Titles and summaries  
  - Author information  
  - Publication dates  
  - Direct “Read More” links  

---

## 🛠️ Technologies Used

| Component | Technology |
|------------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Framework** | Bootstrap 5.0.2 |
| **API** | [NewsAPI](https://newsapi.org) |
| **Icons** | Bootstrap Icons |

---

## 📁 Project Structure

```
news-express/
│
├── index.html          # Main HTML file
├── index.js            # JavaScript for API calls and DOM manipulation
├── README.md           # Project documentation (this file)
```

---

## 🔧 Setup Instructions

### **Prerequisites**
- A modern web browser  
- Internet connection  
- A valid [NewsAPI key](https://newsapi.org)

### **Installation Steps**
1. Download and extract all project files  
2. Open `index.html` in a browser  
3. The application will automatically load BBC News headlines  

### **API Configuration**
Replace the hardcoded API key in `index.js` with your own:
```javascript
let apiKey = 'your-api-key-here';
```

---

## 🎯 How It Works

1. **Page Load** – Loads HTML and Bootstrap with a spinner  
2. **API Request** – Fetches top BBC News headlines via NewsAPI  
3. **Data Processing** – Parses JSON response and formats into Bootstrap cards  
4. **DOM Update** – Hides spinner and displays news articles  
5. **User Interaction** – “Read More” opens the full article on BBC’s website  

---

## 📱 Components

### **Navigation Bar**
- Brand: `NewsExpress`  
- Links: Home, Region (UK), Search bar *(currently non-functional)*

### **News Display**
- Responsive grid layout  
- Each card includes:
  - Image  
  - Title and summary  
  - Author and date  
  - Direct link to full article  

---

## 🔮 Potential Enhancements
- Implement working **search functionality**  
- Add **category filtering** (Sports, Tech, etc.)  
- Include **multiple news sources**  
- Regional news selection  
- **Bookmark/Favorite** feature  
- **Dark mode** support  
- **Offline caching** and **pagination**  

---

## ⚠️ Limitations
- Search bar is currently a placeholder  
- Limited to BBC News source only  
- No error handling for failed API calls  
- No local storage for caching  

---

## 🌐 API Information

**Endpoint:**  
`https://newsapi.org/v2/top-headlines`

**Parameters:**  
- Source: `bbc-news`  
- Country: `gb`

**Free Tier Limit:** 100 requests per day  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to **fork** this project, **improve** features, and **submit pull requests**.
