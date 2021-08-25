<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {   
        $this->fname = $data['fname'];
        $this->lname = $data['lname'];
        $this->email = $data['email'];
        $this->message = $data['message'];
        $this->subject = $data['subject'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $name = $this->fname . ' ' . $this->lname; 

        return $this->from($this->email, $name)->subject($this->subject)->markdown('emails.contact-form', 
            [ 
                'fname' => $this->fname,
                'lname' => $this->lname,
                'email' => $this->email,
                'message' => $this->message 
            ]);
    }
}
