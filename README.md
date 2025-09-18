# Comercial Shop 2023

Αυτό το αποθετήριο περιέχει ένα απλό full‑stack ηλεκτρονικό κατάστημα.
Το backend υλοποιείται με **Django** και το frontend με **React/Redux**.

## Δομή Αποθετηρίου

```
backend/    # Django REST API
front/      # React εφαρμογή
```

### Backend
- Χρησιμοποιεί το **Django REST Framework** και **JWT** για authentication.
- Τα βασικά μοντέλα (Product, Order κ.ά.) βρίσκονται στο `backend/base/models.py`.
- Τα API endpoints ορίζονται στα `backend/base/views.py` και `backend/base/urls.py`.

### Frontend
- Η React εφαρμογή βρίσκεται στο `front` και χρησιμοποιεί **Redux** (`front/src/store.js`).
- Ο φάκελος `front/src/components/screens` περιέχει τις βασικές οθόνες (Home, Login, Cart κ.λπ.).

## Τοπική Εκτέλεση

### Προαπαιτούμενα
- **Python 3**
- **Node.js** & **npm**

### Βήματα
1. Εγκατάσταση Python βιβλιοθηκών:
   ```bash
   pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
   ```
2. Εκκίνηση backend:
   ```bash
   cd backend
   python manage.py runserver
   ```
3. Εγκατάσταση και εκκίνηση frontend:
   ```bash
   cd front
   npm install
   npm start
   ```

Μετά την εκκίνηση, το frontend θα είναι διαθέσιμο στο `http://localhost:3000` και θα επικοινωνεί με το Django API στο `http://127.0.0.1:8000`.

## Επόμενα Βήματα
- Προσθήκη unit tests τόσο στο backend όσο και στο frontend.
- Δημιουργία αρχείου `requirements.txt` και αυτοματοποιημένου setup.
- Deployment σε πραγματικό server.
