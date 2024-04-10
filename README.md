## Dribbble - A Community for Designers (React.js App with Tailwind CSS)

This project is a functional web application inspired by Dribbble, a popular platform for showcasing design work. It allows users to:

* **Create accounts and profiles**
* **Upload design shots** (images and short descriptions)
* **Like and comment on other users' shots**
* **Follow other users**

**Technologies Used:**

* **Frontend:** React.js with Tailwind CSS
* **Backend:** Express.js
* **Database:** Firebase
* **Image Storage:** Cloudinary
* **Email Verification:** Resend (**Note: Currently Disabled**)

**Project Setup:**

1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

3. Create a Tailwind configuration file (`tailwind.config.js`) and customize it according to your preferences.

4. Create a Firebase project and configure the following environment variables in your `.env` file:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
REACT_APP_CLOUDINARY_PRESET=YOUR_CLOUDINARY_PRESET
```

5. **Note:** Email verification functionality is currently disabled due to the lack of a custom domain for the application. To enable email verification, you will need to configure a custom domain with Firebase Authentication.

**Screenshot:**
![Screenshot 2024-04-10 190405](https://github.com/real-varshney/dribbble_clone/assets/109132583/acb76d41-d947-4f69-b259-3345461b0e20)
![Screenshot 2024-04-10 190434](https://github.com/real-varshney/dribbble_clone/assets/109132583/34859e36-8213-4dd2-bd39-e67f9fd17933)
![Screenshot 2024-04-10 190455](https://github.com/real-varshney/dribbble_clone/assets/109132583/7fc8cff9-ec0c-4052-91fe-0065e99cd087)
![Screenshot 2024-04-10 190523](https://github.com/real-varshney/dribbble_clone/assets/109132583/15903499-e0e2-4cc2-8e33-f70f476a72bb)
![Screenshot 2024-04-10 190600](https://github.com/real-varshney/dribbble_clone/assets/109132583/1006363e-0caf-4e5f-a0c3-89076f4736e4)


**Running the Application:**

1. Start the development server:

```bash
npm start
```

2. The application will be accessible at `http://localhost:3000`.

**Additional Notes:**

* Tailwind CSS classes are already integrated throughout the codebase. Feel free to customize the styling further according to your design preferences.
* Extend the functionality by adding features like collections, categories, search, etc.
* Refer to the official documentation for each technology used for detailed usage and configuration.

**Disclaimer:**

This project is for educational purposes only and is not affiliated with the official Dribbble platform.
