"use client";
import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";
import Header from "./components/Header";
import { useForm } from "./hooks/useForm";
import "./contact.css";

export default function Contact() {
  const { formData, submitStatus, isSubmitting, handleChange, handleSubmit } =
    useForm();
  return (
    <div className="page-shell contact-page">
      <div className="contact-layout">
        <div className="contact-introduction">
          <Header />
          <div className="contact-profile-note">
            <div className="contact-profile-image">
              <Image
                src="/images/icon/lulu_robot.webp"
                alt=""
                width={76}
                height={76}
              />
            </div>
            <div>
              <span>HIRO LAB</span>
              <p>ご連絡、お待ちしています。</p>
            </div>
          </div>
          <Link href="/works" className="contact-back-link">
            制作したものを見る <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Form
          formData={formData}
          submitStatus={submitStatus}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
