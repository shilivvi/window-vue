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
}