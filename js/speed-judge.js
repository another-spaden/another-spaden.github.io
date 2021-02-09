function selectSpeed() {
    const selected_speed = document.form_speed.select_speed;
    const index = selected_speed.selectedIndex;
    const def_speed = selected_speed.options[index].value;
    const max_speed = Math.round(def_speed * 1.1 * 100) / 100;
    const min_speed = Math.round(def_speed * 0.9 * 100) / 100;
    const s_speed = Math.floor((max_speed / 0.9) + 1);
    const k_speed = Math.floor(min_speed / 1.1);
    const first_message = "判定した速度は、「" + def_speed + "」です。";
    const second_message = "最大値は、「" + max_speed + "」。";
    const third_message = "最小値は、「" + min_speed + "」。";
    const forth_message = "速度" + def_speed + "に対する確定先攻ラインは、";
    const fifth_message = "速度" + def_speed + "に対する確定後攻ラインは、";
    document.getElementById("first_message").textContent = first_message;
    document.getElementById("second_message").textContent = second_message;
    document.getElementById("third_message").textContent = third_message;
    document.getElementById("forth_message").textContent = forth_message;
    document.getElementById("s_speed").textContent = "「" + s_speed + "」。";
    document.getElementById("fifth_message").textContent = fifth_message;
    document.getElementById("k_speed").textContent = "「" + k_speed + "」。";
}

window.onload = function addOptions() {
    const select = document.getElementById("select_speed");
    for (let i = 1; i <= 1000; i++) {
        let option = document.createElement("option");
        option.text = i;
        option.value = i;
        if (i === 250) {
            option.selected = true;
        }
        select.appendChild(option);

    }
}