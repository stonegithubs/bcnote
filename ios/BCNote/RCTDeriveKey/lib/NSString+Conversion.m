//
//  NSString+Conversion.m
//  BCNote
//
//  Created by yinchong on 2018/11/29.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

@implementation NSString (NSString_Conversion)

#pragma mark - Convert NSString to Hex bytes
- (NSData *) stringToHexData {
  int len = (int)[self length] / 2;
  unsigned char *buf = malloc(len);
  unsigned char *whole_byte = buf;
  char byte_chars[3] = {'\0','\0','\0'};
  
  int i;
  for (i=0; i < [self length] / 2; i++) {
    byte_chars[0] = [self characterAtIndex:i*2];
    byte_chars[1] = [self characterAtIndex:i*2+1];
    *whole_byte = strtol(byte_chars, NULL, 16);
    whole_byte++;
  }
  
  NSData *data = [NSData dataWithBytes:buf length:len];
  free( buf );
  return data;
}
@end
