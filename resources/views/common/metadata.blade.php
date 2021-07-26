@php
$websiteTitle = env('WEBSITE_TITLE', '');
$appUrl = env('APP_URL', '');
@endphp

<meta charset="utf-8">
<meta name="theme-color" content="#001e23">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5">
<meta name="description" content="Test your limits and play with your friends in a series of CUBE Challenges where time is your unique rival!">
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="de_DE" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="it_IT" />
<meta property="og:type" content="website" />
<meta property="og:title" content="{{$websiteTitle}}" />
<meta property="og:url" content="{{$appUrl}}/" />
<meta property="og:site_name" content="{{$websiteTitle}}" />
<meta property="og:image" content="{{$appUrl}}/cubelogo.png" />
<meta property="og:image:secure_url" content="{{$appUrl}}/cubelogo.png" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$websiteTitle}}" />
<meta name="twitter:image" content="{{$appUrl}}/cubelogo.png" />    