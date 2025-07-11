<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('user.{userId}', function ($user, $userId) {
    return (int) $user->id === (int) $userId; // Authenticate the user to listen on their private channel
});

Broadcast::channel('product-channel', function ($user) {
    return $user !== null; // Allow only authenticated users
});

Broadcast::channel('chat-demo', function ($user) {
    return $user !== null; // Allow only authenticated users
});
