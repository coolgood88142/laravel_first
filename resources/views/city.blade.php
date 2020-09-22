<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>

    <body>
        <div id="app">
            @{{ message }}
            <counties v-on:change-counties="updateDistricts" :counties-data="{{ json_encode($counties) }}"></counties>
            <districts v-on:change-districts="getDistrictsSelected" :counties_selected="countiesSelected" :districts-data="{{ json_encode($districts) }}"></districts>
            <button id="show" v-on:click="showPostalCode">@{{ showText }}</button>
        </div>
        <script src="{{mix('js/app.js')}}"></script>
        <script src="{{mix('js/city.js')}}"></script>
    </body>
</html>