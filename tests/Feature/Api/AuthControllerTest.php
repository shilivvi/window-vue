<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $user;
    protected $password;
    protected $url = '/api/v1/';

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub

        $this->password = 'c0dYWhzJ2z~';
        $this->user = User::factory()->make();
    }

    public function testRegisterUser()
    {
        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => $this->user['email'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'user' => [
                        'name',
                        'email',
                    ],
                    'token',
                ],
            ]);
    }

    public function testLoginUser()
    {
        User::create([
            'name' => $this->user['name'],
            'email' => $this->user['email'],
            'password' => bcrypt($this->password),
        ]);

        $response = $this->post($this->url . 'login', [
            'email' => $this->user['email'],
            'password' => $this->password,
        ]);

        $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'user' => [
                        'name',
                        'email',
                    ],
                    'token',
                ],
            ]);
    }

    public function testValidateNameRegisterUser(){
        //Test name required
        $response = $this->post($this->url . 'register', [
            'email' => $this->user['email'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'name'
                ],
            ]);

        //Test name string
        $response = $this->post($this->url . 'register', [
            'name' => 123,
            'email' => $this->user['email'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'name'
                ],
            ]);
    }

    public function testValidateEmailRegisterUser(){
        //Test email required
        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'email'
                ],
            ]);

        //Test email string
        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => 123,
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'email'
                ],
            ]);

        //Test email valid
        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => 'juststring',
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'email'
                ],
            ]);

        //Test email unique
        $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => $this->user['email'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => $this->user['email'],
            'password' => $this->password,
            'password_confirmation' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'email'
                ],
            ]);
    }

    public function testValidatePasswordRegisterUser(){
        //Test password_confirmation required
        $response = $this->post($this->url . 'register', [
            'name' => $this->user['name'],
            'email' => $this->user['email'],
            'password' => $this->password,
        ]);

        $response
            ->assertStatus(422)
            ->assertJsonStructure([
                'errors' => [
                    'password'
                ],
            ]);
    }
}
