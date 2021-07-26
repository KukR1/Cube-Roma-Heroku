<!DOCTYPE html>
<html lang="en">

<head>

    <title>@yield('title') | Cube </title>

    @include('common.metadata')

    @include('common.stylesheets')

    @include('common.analytics')

</head>

<body >
    @include('partials.particles')

    @include('partials.navigation')
   

    @yield('content')

    @include('common.scripts')


</body>
</html>