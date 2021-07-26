<!-- Global site tag (gtag.js) - Google Analytics -->
@php
$gTagId = env('GOOGLE_TAG_ID', '');
@endphp
<script async src="https://www.googletagmanager.com/gtag/js?id={{$gTagId}}"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', '{{$gTagId}}');
</script>