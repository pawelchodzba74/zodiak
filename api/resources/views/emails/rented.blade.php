
     <h2>Zodiak Rezerwacja sal</h2>
     {{-- {{var_dump($config['message']['name'])}} --}}
    <h5><p><span>Client: </span> {{ ($config['message']['name']) }}<span></span></p></h5>

    <p><span>Telefon: </span><span>{{($config['message']['telephon']) }}</span></p>
    <p><span>e-mail: </span><span>{{($config['message']['email']) }}</span></p>
    <p>
        <span>zarezerwowane @if (count($config['message']['room']) > 1) <span>sale</span> @else <span>sali</span> @endif: </span>
            <span>{{implode(",",$config['message']['room'])}}</span>
    </p>
    <p> Start rezerwacji: <span> {{explode(" ",($config['message']['start']))[0] }} o godzinie:  {{explode(" ",($config['message']['start']))[1] }}</span> </p>
    <p> Koniec rezerwacji: <span> {{explode(" ",($config['message']['end']))[0] }} o godzinie: {{explode(" ",($config['message']['end']))[1] }}</span></p>
    @if($config['message']['description'])
       <p><span>Opis: </span><span>{{($config['message']['description']) }}</span></p>
    @endif


