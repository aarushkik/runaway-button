const button = document.getElementById("runaway");
document.addEventListener("mousemove", function(event){
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    const distance = Math.sqrt(Math.pow((event.clientY - centerY), 2) + Math.pow((event.clientX - centerX), 2));
    const dx = centerX - event.clientX;
    const dy = centerY - event.clientY;
    const magnitude = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    console.log(dx + " " + dy);
    console.log(distance);
    if(distance < 100 && magnitude !== 0){
        console.log("TOO CLOSE!");
        const nx = dx/magnitude;
        const ny = dy/magnitude;
        console.log(nx + " " +  ny);
        const escapeDist = 80;
        const newX = rect.left + nx * escapeDist;
        const newY = rect.top + ny * escapeDist;
        const maxX = window.innerWidth - rect.width;
        const minX = 0;
        const maxY = window.innerHeight - rect.height;
        const minY = 0;
        const clampedX = Math.max(minX, Math.min(newX, maxX));
        const clampedY = Math.max(minY, Math.min(newY, maxY));
        console.log(newX + " " + newY);
        button.style.left = clampedX + "px";
        button.style.top = clampedY + "px";
    }
    else{
        console.log("SAFE");
    }
});