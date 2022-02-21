let pointer = document.querySelector(".fa-qrcode").style
        var qr;(function() {
            qr = new QRious({
                element: document.getElementById('canvas'),
                size: 200,
                value: "Hello QrCode"
            });
        })();

        function generateQRCode() {
            var qrtext = document.getElementById("qr-text").value;
            var qrkeep = document.querySelector(".SaveButton")
            var canvas = document.querySelector("canvas")
            var backBtn = document.querySelector(".backBtn")
            qr.set({
                size:200,
                value: qrtext
            })
            if(qrtext.length > 0){
                pointer.cursor = "pointer"
                pointer.color = "red"
            }

            if(qrtext.length > 1){
                qrkeep.style.visibility = "visible"
            }

            if(qrtext.length < 1){
                qrkeep.style.visibility = "hidden"
            }

            if(qrtext.length == 0){
                pointer.cursor = "default"
                pointer.color = "blue"
            }

            qrkeep.onclick = function(){
                const link = document.createElement('a');
                link.download = 'QrCode.png';
                link.href = canvas.toDataURL();
                link.click();
                link.delete;
            }
        }
        function Codeclick(){
            var qrtext = document.getElementById("qr-text");
            var qrkeep = document.querySelector(".SaveButton")
            qrtext.value = ''
            pointer.color = "blue"
            qr.set({value: ''})
            qrkeep.style.visibility = "hidden"
        }


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
