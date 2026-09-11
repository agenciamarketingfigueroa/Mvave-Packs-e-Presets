#import <Foundation/Foundation.h>
#import <PDFKit/PDFKit.h>

int main(int argc, const char *argv[]) {
  @autoreleasepool {
    if (argc < 2 || argc > 3) {
      fprintf(stderr, "uso: extract-pdf-text CAMINHO_DO_PDF [PÁGINA]\n");
      return 2;
    }

    NSString *path = [NSString stringWithUTF8String:argv[1]];
    PDFDocument *document = [[PDFDocument alloc] initWithURL:[NSURL fileURLWithPath:path]];
    if (!document) {
      fprintf(stderr, "não foi possível abrir o PDF\n");
      return 1;
    }

    NSInteger start = 0;
    NSInteger end = document.pageCount;
    if (argc == 3) {
      NSInteger requested = [[NSString stringWithUTF8String:argv[2]] integerValue];
      if (requested < 1 || requested > document.pageCount) {
        fprintf(stderr, "página fora do intervalo 1-%ld\n", (long) document.pageCount);
        return 2;
      }
      start = requested - 1;
      end = requested;
    }

    for (NSInteger index = start; index < end; index += 1) {
      PDFPage *page = [document pageAtIndex:index];
      NSString *text = page.string ?: @"";
      printf("\n===== PÁGINA %ld =====\n%s\n", (long) index + 1, text.UTF8String);
    }
  }
  return 0;
}
