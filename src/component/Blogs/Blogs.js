import React from "react";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 p-5 bg-gray-200">
      <div className="bg-gray-300  p-5 rounded-2xl">
        <h1 className="font-serif font-bold text-2xl text-red-600 pb-5">
          Q: What is the difference between Authorization and Authentication ?
        </h1>
        <div className="text-xl text-justify leading-relaxed">
          Authentication মূলত user কে সেটা যাচাই করে। Authentication হলো একটি
          good identity এবং access management process এর প্রথম ধাপ।
          Authentication process user দ্বারা দৃশ্যমান এবং user চাইলে এটিকে আংশিক
          পরিবর্তন করতে পারে। Password, Pin ইত্যাদি process এর মাধ্যমে
          Authentication কাজ করে।
          <p className="my-10"></p>
          কোনো user কোন কোন resource ব্যাবহার করতে পারবে সেটা Authorization
          নির্ধারণ করে। Authorization Authentication এর উপর নির্ভশীল।
          Authentication করা না হলে Authorization কাজ করে না। তবে user চাইলেই
          Authorization পরিবর্তন করতে পারবে না।
        </div>
      </div>
      <div className="bg-gray-300  p-5 rounded-2xl">
        <h1 className="font-serif font-bold text-2xl text-red-600 pb-5">
          Q: Why are you using Firebase ? What other options do you have to
          implement Authentication ?
        </h1>
        <div className="text-xl text-justify leading-relaxed">
          Firebases হলো Google-backend application development software যেটা
          developer দের android app, web app ইত্যাদি তৈরি করতে পারে। আমি আমার
          website কে hosting করার জন্য, Authentication service add করার জন্য
          Firebase use করি। Firebases এর কিছু Alternative হল:
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Parse
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Back4App
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> AWS Amplify
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Kuzzle
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Couchbase
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> NativeScript
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> RxDB
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Flutter
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> LoopBack
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> SashiDo
          </p>
        </div>
      </div>
      <div className="bg-gray-300  p-5 rounded-2xl">
        <h1 className="font-serif font-bold text-2xl text-red-600 pb-5">
          Q: What other services Firebase provided other than Authentication ?
        </h1>
        <div className="text-xl text-justify leading-relaxed">
          Firebase হলো একটি backend development software application. Firebase
          এর user কে অনেকগুলো service provide করে। যেমন:
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Cloud Firestore
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Cloud Functions
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Authentication
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Hosting
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Cloud Storage
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Google Analytics
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Predictions
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Cloud Messaging
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Dynamic Links
          </p>
          <p className="py-2">
            <i className="las la-hand-point-right"></i> Remote Config
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
