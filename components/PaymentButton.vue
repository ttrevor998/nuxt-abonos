<template>
    <div class="container">

        <button type="button" class="btn btn-primary"
            @click="openWhatsAppModal">Buy Now</button>

        <!--
        <button @click="generateQRCode">Buy Now</button>
        <canvas id="qr-code"></canvas>
        -->
        <div class="modal fade" id="whatsappModal" tabindex="-1" aria-labelledby="whatsappModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="whatsappModalLabel">Complete Your Purchase</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" id="whatsappTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="qr-tab" data-bs-toggle="tab" data-bs-target="#qr"
                                    type="button" role="tab" aria-controls="qr" aria-selected="true">QR Code</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="link-tab" data-bs-toggle="tab" data-bs-target="#link"
                                    type="button" role="tab" aria-controls="link" aria-selected="false">Direct
                                    Link</button>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content mt-3">
                            <!-- QR Code Tab -->
                            <div class="tab-pane fade show active" id="qr" role="tabpanel" aria-labelledby="qr-tab">
                                <canvas id="qr-code"></canvas>
                                <p class="text-muted mt-2">Scan this code to continue on WhatsApp.</p>
                            </div>
                            <!-- Direct Link Tab -->
                            <div class="tab-pane fade" id="link" role="tabpanel" aria-labelledby="link-tab">
                                <a id="whatsapp-link" class="btn btn-success" href="#" target="_blank">Open in
                                    WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { title, productSlug, description, price } = defineProps(['title','productSlug', 'description', 'price'])

function openWhatsAppModal() {
    // WhatsApp Number (Replace with your actual WhatsApp number)
    const phoneNumber = '+573102977103';
    const productUrl = `https://nuxt-abonos.pages.dev/tienda/${productSlug}`;
    // Generate WhatsApp URL with message details
    const message = `Hola me gustaría comprar esete producto:\n\n ${productUrl}\n\n-Producto:${title}\n-Precio:$ ${price} COP \n-Descripción:${description}\n`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Generate QR Code for WhatsApp Link
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: whatsappURL,
        size: 200,
    });

    // Set the href for the direct WhatsApp link
    document.getElementById('whatsapp-link').href = whatsappURL;

    // Show the modal
    const whatsappModal = new bootstrap.Modal(document.getElementById('whatsappModal'));
    whatsappModal.show();
}

/*
const { title, productSlug, description, price } = defineProps(['title','productSlug', 'description', 'price'])

function generateQRCode() {
    console.log('generated')
    const phoneNumber = '+573102977103';
    const productUrl = `https://nuxt-abonos.pages.dev/tienda/${productSlug}`;
    //const productPrice = price
    //const description = description;

    const message = `Hola me gustaría comprar esete producto:\n\n ${productUrl}\n\n-Producto:${title}\n-Precio:$ ${price} COP \n-Descripción:${description}\n`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Generate QR code
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: whatsappURL,
        size: 200,
    });
}*/

</script>

<style lang="scss" scoped></style>