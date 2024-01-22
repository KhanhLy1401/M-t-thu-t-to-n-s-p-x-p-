

async function insertion() {
    const element = document.querySelectorAll('.sort');

    element[0].style.background = SORTED;
    for (let i = 1; i < element.length; i++) {
        element[i].style.background = SELECTED;

        let tempHeight = element[i].style.height;
        let tempText = element[i].textContent;  // Lưu giữ nội dung hiện tại

        let j = i - 1;

        while (j >= 0 && (parseInt(tempHeight) < parseInt(element[j].style.height))) {
            element[j].style.background = COMPARE;
            element[j + 1].style.height = element[j].style.height;
            element[j + 1].textContent = element[j].textContent;  // Cập nhật nội dung

            j--;

            await delay(time);
            for (let k = 0; k < i; k++) {
                element[k].style.background = SORTED;
            }
        }

        element[j + 1].style.height = tempHeight;
        element[j + 1].textContent = tempText;  // Khôi phục nội dung
        element[i].style.background = SORTED;
    }
}

document.getElementById("insertion").addEventListener("click", async function () {
    await insertion();
});
