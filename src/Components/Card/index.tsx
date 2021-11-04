import axios from "axios";
import api from "../../Services/api";
import { useState } from "react";

interface CardProps {
  heading: string;
  caption: string;
  price: string;
  img: HTMLImageElement;
}

export const Card = ({ heading, caption, price, img }: CardProps) => {};
