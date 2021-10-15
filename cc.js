"use strict";
exports.__esModule = true;
exports.PROTO_PATH = void 0;
exports.PROTO_PATH = __dirname + '/Chk.proto'; //path of the proto file
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(exports.PROTO_PATH, {});
var app = grpc.loadPackageDefinition(packageDefinition);
var chkpackage = app.chkpackage;
function main() {
    var client = new chkpackage.ChineseCheckers('localhost:40000', grpc.credentials.createInsecure());
    var Token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1MDM0MmIwMjU1MDAyYWI3NWUwNTM0YzU4MmVjYzY2Y2YwZTE3ZDIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmhhdmkgTWVodGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKd1Q0WUpaNUxSdVV6VGtZcVY5RGJtUWdhcmxXR3laTUZZa3lidS09czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJhY3RmaXJlYmFzZS0yZGRlZiIsImF1ZCI6InByYWN0ZmlyZWJhc2UtMmRkZWYiLCJhdXRoX3RpbWUiOjE2MzM2MDEzNDAsInVzZXJfaWQiOiJmYUYzQTNGOWRPV1VNekFtMHM3RmZUWkxDNW0xIiwic3ViIjoiZmFGM0EzRjlkT1dVTXpBbTBzN0ZmVFpMQzVtMSIsImlhdCI6MTYzMzYwMTg3OCwiZXhwIjoxNjMzNjA1NDc4LCJlbWFpbCI6ImJoYXZpbWRlbGwxNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNTM3OTE1MzA2NTgzOTIyNTIxNSJdLCJlbWFpbCI6WyJiaGF2aW1kZWxsMTZAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.FSt3S1UTT65ozZEcLQIDiFidSLjsAJQdaToDqxN2SzC1AuKokYA5RC1FxXibJwh31p7kkB3FEwuZGVOFQcVDqqqdr8sBUeCWqmXKR_4PORDM30HpC0HxSf36EtgiiZ662USl3fogJ77KMGDKljl3l4C-Hs6_rmF_86ivkqfflhldmtmPYLgz9BzejuTzgdxEA35wop4_AA6Bd5otJVOuEoXPEAArmrsJGx1scfHI1zeY_2AjEgLlqjKFdn1qQIMTU7OgxdKPbnyeNX8H2fFUsRfwn9GxJNEIg01_fVaWTg63EYdwr7X7GF7QaRHOCy2sXxQ8lraZ0tnaAI_0H0XnVg";
    client.createRoomCode(Token, function (err, response) {
        console.log('Roomcode:' + JSON.stringify(response));
    });
}
main();
