/* =====================================
   KIT BUDI - MAIN JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // DAPATKAN ELEMENT
    // =====================================

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");
    const startButton = document.getElementById("startButton");


    // =====================================
    // FUNGSI MUZIK KIT BUDI
    // =====================================

    if (music) {

        // Pastikan muzik sentiasa berulang
        music.loop = true;


        // =====================================
        // AUTO MAIN MUZIK BILA PAGE DIBUKA
        // =====================================

        music.play()
            .then(function () {

                console.log("Muzik sedang dimainkan");

                // Tukar button kepada OFF sebab muzik sedang hidup
                if (musicButton) {
                    musicButton.innerHTML = "🔇 MUZIK OFF";
                }

            })
            .catch(function (error) {

                console.log("Autoplay belum dibenarkan oleh browser:", error);

            });


        // =====================================
        // BUTANG MUZIK ON / OFF
        // =====================================

        if (musicButton) {

            musicButton.addEventListener("click", async function () {

                // KALAU MUZIK TENGAH BERMAIN
                if (!music.paused) {

                    music.pause();

                    musicButton.innerHTML = "🔊 MUZIK ON";

                }

                // KALAU MUZIK BERHENTI
                else {

                    try {

                        await music.play();

                        musicButton.innerHTML = "🔇 MUZIK OFF";

                    } catch (error) {

                        console.error("Muzik gagal dimainkan:", error);

                    }

                }

            });

        }

    }


    // =====================================
    // BUTANG MULA PENGEMBARAAN
    // =====================================

    if (startButton) {

        startButton.addEventListener("click", function () {

            window.location.href = "biodata.html";

        });

    }


});