import { 
  users, 
  pensionCalculations,
  articles,
  contacts,
  type User, 
  type InsertUser,
  type PensionCalculation,
  type InsertPensionCalculation,
  type Article,
  type InsertArticle,
  type Contact,
  type InsertContact
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createPensionCalculation(calculation: InsertPensionCalculation): Promise<PensionCalculation>;
  getPensionCalculationsByUser(userId: number): Promise<PensionCalculation[]>;
  
  getPublishedArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private pensionCalculations: Map<number, PensionCalculation>;
  private articles: Map<number, Article>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentCalculationId: number;
  private currentArticleId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.pensionCalculations = new Map();
    this.articles = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentCalculationId = 1;
    this.currentArticleId = 1;
    this.currentContactId = 1;
    
    // Seed with sample articles
    this.seedArticles();
  }

  private seedArticles() {
    const sampleArticles: Article[] = [
      {
        id: 1,
        title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
        slug: "top-5-greseli-planificare-pensie",
        description: "Descoperă cele mai comune greșeli pe care le fac românii când își planifică pensia și cum să le eviți pentru o bătrânețe liniștită.",
        content: `# Top 5 Greșeli de Evitat în Planificarea Pensiei

Planificarea pensiei este una dintre cele mai importante decizii financiare pe care le vei lua în viață. Din păcate, mulți români fac greșeli costisitoare care le afectează semnificativ viitorul financiar.

## 1. Amânarea planificării până la vârsta de 40-50 de ani

Cea mai mare greșeală este să crezi că ai timp. Compoundingul funcționează cel mai bine pe termen lung.

## 2. Dependența exclusivă de pensia de stat

Pensia de stat din România nu va fi suficientă pentru menținerea standardului de viață.

## 3. Ignorarea inflației în calculele pe termen lung

Inflația erodează puterea de cumpărare a banilor în timp.

## 4. Neînțelegerea sistemului cu trei piloni

Mulți nu știu diferența între Pilonul II și III.

## 5. Lipsa diversificării surselor de venit

Nu pune toate ouăle în același coș.`,
        category: "Planificare",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2024-12-15"),
        updatedAt: new Date("2024-12-15")
      },
      {
        id: 2,
        title: "Pilonul II vs. Pilonul III: Ghid de Decizie",
        slug: "pilonul-2-vs-3-ghid-decizie",
        description: "Compară avantajele și dezavantajele celor două piloni privați și alege strategia optimă pentru situația ta financiară.",
        content: `# Pilonul II vs. Pilonul III: Ghid de Decizie

Sistemul de pensii din România include două piloni privați care pot completa pensia de stat. Înțelegerea diferențelor este crucială.

## Pilonul II (Obligatoriu)

- Contribuție obligatorie de 3.75% din salariu
- Administrat de fonduri de pensii private
- Nu poți retrage banii înainte de pensionare

## Pilonul III (Voluntar)

- Contribuție voluntară cu beneficii fiscale
- Flexibilitate în alegerea fondului
- Posibilitatea retragerii anticipate

## Concluzie

Ambii piloni sunt importanți pentru o strategie completă de pensionare.`,
        category: "Investiții",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2024-12-12"),
        updatedAt: new Date("2024-12-12")
      },
      {
        id: 3,
        title: "Vârsta Standard de Pensionare în România: Tabel Complet",
        slug: "varsta-standard-pensionare-romania-tabel",
        description: "Află exact la ce vârstă te poți pensiona în funcție de anul nașterii și sexul tău, conform legislației actuale.",
        content: `# Vârsta Standard de Pensionare în România: Tabel Complet

Vârsta de pensionare în România variază în funcție de anul nașterii și sex, conform reformelor legislative implementate.

## Tabel Vârsta de Pensionare 2025

### Bărbați
- Anul nașterii 1959 și anterior: 65 ani
- Anul nașterii 1960 și ulterior: 65 ani

### Femei
- Anul nașterii 1962 și anterior: 63 ani
- Anul nașterii 1963 și ulterior: 63 ani

## Stagiul Minim de Cotizare

Pentru a beneficia de pensie, este necesar un stagiu minim de cotizare de 15 ani.

## Modificări Legislative

Legislația se poate modifica, este important să verifici periodic actualizările.`,
        category: "Legislație",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        published: true,
        createdAt: new Date("2024-12-10"),
        updatedAt: new Date("2024-12-10")
      }
    ];

    sampleArticles.forEach(article => {
      this.articles.set(article.id, article);
      this.currentArticleId = Math.max(this.currentArticleId, article.id + 1);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async createPensionCalculation(calculation: InsertPensionCalculation): Promise<PensionCalculation> {
    const id = this.currentCalculationId++;
    const pensionCalculation: PensionCalculation = {
      ...calculation,
      id,
      createdAt: new Date()
    };
    this.pensionCalculations.set(id, pensionCalculation);
    return pensionCalculation;
  }

  async getPensionCalculationsByUser(userId: number): Promise<PensionCalculation[]> {
    return Array.from(this.pensionCalculations.values()).filter(
      calc => calc.userId === userId
    );
  }

  async getPublishedArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.published)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      article => article.slug === slug && article.published
    );
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = {
      ...insertArticle,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.articles.set(id, article);
    return article;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      responded: false,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values())
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }
}

export const storage = new MemStorage();
