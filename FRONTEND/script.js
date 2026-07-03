const form = document.getElementById("uploadForm");

const status = document.getElementById("status");

const fileInput = document.getElementById("resumeFiles");

const fileList = document.getElementById("fileList");

/* ===========================
   Display Selected Files
=========================== */

fileInput.addEventListener("change", () => {

    fileList.innerHTML = "";

    if (fileInput.files.length === 0) {

        fileList.innerHTML = "No resumes selected.";

        return;

    }

    const title = document.createElement("p");

    title.innerHTML = `<strong>${fileInput.files.length} Resume(s) Selected</strong>`;

    fileList.appendChild(title);

    for (const file of fileInput.files) {

        const item = document.createElement("div");

        item.innerHTML = "📄 " + file.name;

        item.style.marginTop = "8px";

        fileList.appendChild(item);

    }

});

/* ===========================
   Submit Form
=========================== */

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const jobDescription = document
        .getElementById("jobDescription")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const resumes = fileInput.files;

    if (!jobDescription) {

        status.innerHTML = "❌ Please enter the job description.";

        return;

    }

    if (resumes.length === 0) {

        status.innerHTML = "❌ Please upload at least one resume.";

        return;

    }

    if (!email) {

        status.innerHTML = "❌ Please enter an email address.";

        return;

    }

    const formData = new FormData();

    formData.append("jobDescription", jobDescription);

    formData.append("email", email);

    for (let i = 0; i < resumes.length; i++) {

        formData.append("resumes", resumes[i]);

    }

    try {

        status.innerHTML = "⏳ Uploading resumes...";

        const response = await fetch(

            "https://robojet.app.n8n.cloud/webhook-test/4aa60238-6cbd-4dd7-bb38-53a3598daa39",

            {

                method: "POST",

                body: formData

            }

        );

        if (!response.ok) {

            throw new Error("Server Error");

        }

        const data = await response.json();

        if (data.success) {

            status.innerHTML = "✅ " + data.message;

        } else {

            status.innerHTML = "❌ " + data.message;

        }

        form.reset();

        fileList.innerHTML = "";

    }

    catch (error) {

        console.error(error);

        status.innerHTML = "❌ Failed to analyze resumes.";

    }

});