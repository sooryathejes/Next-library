import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
<div>
  <BookOverview/>
  <BookList title="Latest Books" books = {sampleBooks} contanerClassName=""/>
</div>
  );                                                                                  
} 