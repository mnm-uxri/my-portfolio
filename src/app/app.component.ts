import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isScrolled = false;
  currentYear = new Date().getFullYear();

  formData = { name: '', email: '', message: '' };

  skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'C++', level: 70 },
  ];

  stats = [
    { number: '10+', label: 'Projects Built' },
    { number: '3+', label: 'Years Learning' },
    { number: '4', label: 'Languages' },
    { number: '100%', label: 'Passion' },
  ];

  projects = [
    {
      icon: '🌐',
      name: 'Personal Website',
      description: 'A responsive personal portfolio website built with HTML, CSS and JavaScript showcasing my work.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com'
    },
    {
      icon: '🧮',
      name: 'Calculator App',
      description: 'A fully functional calculator with clean UI, keyboard support and history tracking.',
      tags: ['JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com'
    },
    {
      icon: '📋',
      name: 'Todo List',
      description: 'A task management app with add, edit, delete and filter functionality.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com'
    },
    {
      icon: '⚙️',
      name: 'C++ Console App',
      description: 'A data structures project built in C++ demonstrating sorting algorithms and complexity.',
      tags: ['C++', 'Algorithms'],
      github: 'https://github.com'
    },
  ];

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  sendMessage() {
    alert(`Thanks ${this.formData.name}! I'll get back to you soon.`);
    this.formData = { name: '', email: '', message: '' };
  }
}