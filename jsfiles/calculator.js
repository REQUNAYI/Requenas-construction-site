document.getElementById('calculate').addEventListener('click', function() {
            const convertInchesToFt = parseFloat(document.getElementById('height').value) / 12;
            const getarea= parseFloat(document.getElementById('length').value) * parseFloat(document.getElementById('width').value);
            const volume = convertInchesToFt * getarea / 27 * 6
            document.getElementById('result').innerText = `Sacks needed: ${volume.toFixed(2)} Sack`;
        });