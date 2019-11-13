<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Mail\Rented;
use \Illuminate\Support\Facades\Mail;
class RentSending implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    // protected $rent;
    protected $config;
    public $tries = 5;
    public function __construct($config)
    {
        // $this->rent = $rent;
        $this->config = $config;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Mail::to('pawulon@jk.op')->cc($this->email['cc'])->send(new Rented($this->email['message']));
        Mail::to($this->config['to'])->cc($this->config['cc'])->send(new Rented($this->config));
    }
    public function failed(Exception $exception)
    {
        // Send user notification of failure, etc...
    }
}
