<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;


/**
 * Contact controller.
 */
class ContactController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the contact view.
     *
     * @return \Illuminate\Http\Response
     */
    public function render()
    {
        $view = 'contact';
        return view('contact')->with('view', $view);
    }

    /**
     * Sends an email to the visitor 
     * after completing the contact form.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendEmail()
    {

        $name = $_POST['name'];
        $subject = 'cuberoma.com - Contact Form ';
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $recipient = 'nikdani123@hotmail.com';
        echo json_encode($name);
        try {

            // build the template data
            $data = [
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'message' => $message,
                'subject' => $subject
            ];
            
            // send the email using the template
            Mail::to($recipient)->send(new ContactFormMail($data));

        } catch (\Exception $e) {
            // Get error here
            return $e;
        }
    }
}
