<h2>Zodiak Rezerwacja sal</h2>
{{-- {{var_dump(explode(" ",($config['message']['start']))[1])}} --}}
 <h5>Rezerwacja potwierdzona.</h5>
<p>Prosimy o wpłatę na konto: <span>1234 1234 1234 1234 1234 1234</span> </p>
@if(($config['message']['price']))
  <p>Kwota: <span>{{ ($config['message']['price']) }} zł</span></p>
@endif
<p>W tytule przelewu prosimy umiescić : <span>{{ ($config['message']['id']). "/". date('y') }}</span></p>
<h5>Rezerwacja:</h5>

@if (count(explode(',', $config['message']['room'])) > 1)
    <span>zarezerwowane <span>sale:</span><span>{{$config['message']['room']}}</span> </span>
@else
    <span>zarezerwowana <span>sala:</span><span>{{$config['message']['room']}}</span> </span>
@endif

<p> Start rezerwacji: <span> {{explode(" ",($config['message']['start']))[0] }} o godzinie:  {{explode(" ",($config['message']['start']))[1] }}</span> </p>
<p> Koniec rezerwacji: <span> {{explode(" ",($config['message']['end']))[0]}} o godzinie: {{explode(" ",($config['message']['end']))[1] }}</span></p>

